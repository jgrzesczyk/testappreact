import styled from 'styled-components';
import { Accordion } from '@mui/material';
import { BACKGROUND_COLOR, BORDER_COLOR, BOX_SHADOW } from '../../colors.ts';

export const UserAccordion = styled(Accordion)`
  margin: 16px 0;
  box-shadow: ${BOX_SHADOW};
  border: 1px solid ${BORDER_COLOR};
  border-radius: 8px;

  &::before {
    display: none;
  }

  .accordion {
    &__summary {
      background: ${BACKGROUND_COLOR};
      border-radius: 8px;
    }

    &__details {
      padding: 16px 16px 16px 32px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  }
`;
