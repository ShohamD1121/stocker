import styled from "styled-components";
import { Button, Paper, Typography, TextField } from "@mui/material";

export const PaperStyle = styled(Paper)`
  padding: 0.1rem;
  text-align: center;
`;

export const FormStyle = styled.form`
  margin-inline: auto !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  margin: 1.25rem;
  padding-top: 2rem;
`;

export const FileInputStyle = styled.div`
  width: 97%;
  margin: 10px 0;
`;

export const ButtonSubmitStyle = styled(Button)`
  margin-bottom: 100px;
  width: 100px;
  border: 2px solid #24d878 !important;
  box-shadow: none !important;
  border-radius: 12px !important;
  background-color: transparent !important;
  color: #24d878 !important;
  &:hover {
    background-color: #24d878 !important;
    color: white !important;
  }
`;

export const TypographyStyle = styled(Typography)`
  text-align: center;
  color: #24d878;
  margin-top: 1rem !important;
`;

export const TextFieldStyle = styled(TextField)`
  width: 500px;
  outline-color: #24d878 !important;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  & label.Mui-focused {
    color: #24d878;
  }
  & .MuiOutlinedInput-root {
    &.Mui-focused fieldset {
      border-color: #24d878;
    }
  }
`;
