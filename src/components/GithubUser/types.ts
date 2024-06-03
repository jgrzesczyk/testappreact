import { AccordionProps } from '@mui/material';
import { HTMLAttributes } from 'react';

export type GithubUserProps = Omit<AccordionProps, 'children'> & {
  username: string;
};

export type GithubRepositoryProps = HTMLAttributes<HTMLDivElement> & {
  name: string;
  fullName: string;
  description: string;
};
