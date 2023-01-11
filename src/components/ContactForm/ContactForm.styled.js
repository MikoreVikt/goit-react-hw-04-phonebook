import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  padding: 20px;
  box-shadow: 0 0 2px;
  border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  margin-bottom: 10px;
  width: 100%;
  row-gap: 5px;
`;

export const Input = styled.input`
  font-size: 18px;
  padding: 6px 10px;
  border-radius: 5px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  margin: 10px;
  padding: 5px;
  font-weight: 700;
  background-color: transparent;
  box-shadow: 0 0 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
