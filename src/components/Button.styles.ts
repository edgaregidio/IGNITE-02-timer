import styled,  {css} from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariantes = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 8px;
  border: 0;
  margin-right: 1rem;

  background-color: ${props => props.theme['green-300']};
  color: ${props => props.theme.white}
  
  /* ${props => {
    return css`
      background-color: ${buttonVariantes[props.variant]}
    `
  }} */

`;
