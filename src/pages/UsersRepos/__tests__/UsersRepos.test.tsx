import '@testing-library/jest-dom';
import { renderDOM } from '../../../jest/utils.tsx';
import { UsersRepos } from '../UsersRepos.tsx';
import { queryClient } from '../../../queryClient.ts';
import { API_MOCKS } from '../../../mocks';
import { userEvent } from '@testing-library/user-event';
import { screen } from '@testing-library/react';

let fetchMock: jest.SpyInstance | null = null;

const mockData = (url: string) => {
  if (url.startsWith('https://api.github.com/search/users')) return API_MOCKS.getUsers;
  if (url.startsWith('https://api.github.com/users')) return API_MOCKS.getUserRepos;
  if (url.startsWith('https://api.github.com/repos')) return API_MOCKS.getRepoStars;
  return {};
};

beforeEach(() => {
  fetchMock = jest
    .spyOn(global, 'fetch')
    .mockImplementation(
      jest.fn((url) =>
        Promise.resolve({ ok: true, json: () => Promise.resolve(mockData(url)) })
      ) as jest.Mock
    );
});

afterEach(() => {
  jest.restoreAllMocks();
  queryClient.clear();
});

test('WHEN app is launched THEN no users are visible', async () => {
  // WHEN
  renderDOM(<UsersRepos />);

  // THEN
  expect(screen.queryAllByLabelText('User accordion')).toHaveLength(0);
});

test('WHEN form is submitted THEN proper request is sent', async () => {
  // GIVEN
  renderDOM(<UsersRepos />);

  // WHEN
  await userEvent.type(screen.getByRole('textbox'), 'login');
  await userEvent.click(screen.getByRole('button'));

  // THEN
  expect(fetchMock).toHaveBeenCalledTimes(1);
  expect(fetchMock).toHaveBeenCalledWith('https://api.github.com/search/users?q=login&per_page=5');
});

test('WHEN form is submitted THEN matched users are shown', async () => {
  // GIVEN
  const users = ['user11', 'user2'];

  // WHEN
  await renderWithFilledForm();
  const accordions = screen.queryAllByLabelText('User accordion');

  // THEN
  expect(accordions).toHaveLength(users.length);
  users.forEach((user, i) => {
    expect(accordions[i].innerHTML).toContain(user);
  });
});

test('GIVEN visible users WHEN user is clicked THEN proper requests are sent', async () => {
  // GIVEN
  await renderWithFilledForm();

  // WHEN
  await userEvent.click(screen.getByText('user11'));

  // THEN
  expect(fetchMock).toHaveBeenCalledTimes(5);
  expect(fetchMock).toHaveBeenNthCalledWith(2, 'https://api.github.com/users/user11/repos');

  expect(fetchMock).toHaveBeenNthCalledWith(3, 'https://api.github.com/repos/user11/test1');
  expect(fetchMock).toHaveBeenNthCalledWith(4, 'https://api.github.com/repos/user11/test2');
  expect(fetchMock).toHaveBeenNthCalledWith(5, 'https://api.github.com/repos/user11/test3');
});

test('GIVEN visible users WHEN user is clicked THEN repos are shown', async () => {
  // GIVEN
  const repos = [
    ['test1', 'Test 1 description'],
    ['test2', 'Test 2 description'],
    ['test3', 'Test 3 description']
  ];
  await renderWithFilledForm();

  // WHEN
  await userEvent.click(screen.getByText('user11'));
  const repoElements = await screen.findAllByLabelText('User repository');

  // THEN
  expect(repoElements).toHaveLength(repos.length);
  repos.forEach(([name, desc], i) => {
    expect(repoElements[i].innerHTML).toContain(name);
    expect(repoElements[i].innerHTML).toContain(desc);
  });
});

const renderWithFilledForm = async () => {
  renderDOM(<UsersRepos />);

  await userEvent.type(screen.getByRole('textbox'), 'login');
  await userEvent.click(screen.getByRole('button'));
};
