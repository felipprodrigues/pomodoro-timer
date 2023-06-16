import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  border: 0;
  border-radius: 4px;
  height: 40px;
  margin: 8px;
  width: 100px;

  background-color: ${(props) => props.theme["green-500"]};
  color: ${(props) => props.theme.white};
  /* ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `} */
`;
