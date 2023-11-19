import styled from 'styled-components';

export const Label = styled.label`
    margin-right: 20px;
       font-weight: 600;
`;

export const Input = styled.input`
    margin-left: 10px;
`;

export const Button = styled.button`
  cursor: pointer;
  border: solid 1px transparent;
  border-radius: 4px;
  padding: 3px 30px;
  color: #ffffff;
  background-color: #9555af;
 
  margin-right: 20px;
  margin-top: 20px;

  &:active {
  transform: translateY(1px);
  filter: saturate(150%);
}

&:hover,
&:focus {
  color: #9555af;
  border-color: currentColor;
  background-color: white;
}

    &:last-child {
    margin-bottom: 0;
    }
`;

export const Form = styled.form`
  background: #e7d7f1;
  padding: 20px;
  text-align: center;
  border-radius: 5px;
  max-width: 600px;

  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`;

