import { FC } from 'react';
import { AccordionDetails, AccordionSummary, CircularProgress } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserAccordion } from './GithubUser.style.ts';
import { useGetUserRepos } from '../../queries/useGetUserRepos/useGetUserRepos.ts';
import { GithubRepository } from './GithubRepository.tsx';
import { GithubUserProps } from './types.ts';

export const GithubUser: FC<GithubUserProps> = ({ username, expanded: isExpanded, ...props }) => {
  const { data, isFetching, isError } = useGetUserRepos(username, !!isExpanded);

  const renderDetails = () => {
    if (isFetching) {
      return <CircularProgress />;
    }

    if (isError) return 'Error occurred';

    return data?.map(({ description, name, id, full_name: fullName }) => (
      <GithubRepository key={id} name={name} fullName={fullName} description={description} />
    ));
  };

  return (
    <UserAccordion aria-label="User accordion" expanded={isExpanded} {...props}>
      <AccordionSummary className="accordion__summary" expandIcon={<ExpandMoreIcon />}>
        {username}
      </AccordionSummary>
      <AccordionDetails className="accordion__details">{renderDetails()}</AccordionDetails>
    </UserAccordion>
  );
};
