import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../../colors.ts';

export const SearchBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;

  .searchbar {
    &__form {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
      margin: 0 auto;
      max-width: 300px;
    }
  }
`;

export const SearchInput = styled(TextField)`
  background: ${BACKGROUND_COLOR};
`;

export const SearchBarButton = styled(Button)`
  text-transform: none;
`;

export const ResultText = styled.div`
  font-size: 14px;
  text-align: center;
`;
