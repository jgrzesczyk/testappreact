import styled from 'styled-components';
import { REPOSITORY_COLOR } from '../../colors.ts';

export const GithubRepositoryStyled = styled.div`
  display: flex;
  padding: 16px;
  background: ${REPOSITORY_COLOR};
  border-radius: 8px;

  .repository {
    &__content {
      flex: 1 0;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    &__title {
      font-weight: 700;
    }

    &__aside {
      display: flex;
      gap: 4px;
      font-weight: 700;

      svg {
        font-size: 20px;
      }
    }
  }
`;
