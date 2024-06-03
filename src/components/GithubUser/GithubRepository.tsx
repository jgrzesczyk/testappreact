import { FC } from 'react';
import { GithubRepositoryStyled } from './GithubRepository.style.ts';
import { Star } from '@mui/icons-material';
import { useGetRepoStars } from '../../queries/useGetRepoStars/useGetRepoStars.ts';
import { CircularProgress } from '@mui/material';
import { GithubRepositoryProps } from './types.ts';

export const GithubRepository: FC<GithubRepositoryProps> = ({
  className = '',
  name,
  description,
  fullName,
  ...props
}) => {
  const { data: stars, isFetching, isError } = useGetRepoStars(fullName);

  const renderStars = () => {
    if (isFetching) {
      return <CircularProgress />;
    }

    if (isError) return null;

    return (
      <>
        <span>{stars}</span>
        <Star />
      </>
    );
  };

  return (
    <GithubRepositoryStyled
      aria-label="User repository"
      className={`${className} repository`}
      {...props}>
      <div className="repository__content">
        <div className="repository__title">{name}</div>
        <div>{description}</div>
      </div>
      <div className="repository__aside">{renderStars()}</div>
    </GithubRepositoryStyled>
  );
};
