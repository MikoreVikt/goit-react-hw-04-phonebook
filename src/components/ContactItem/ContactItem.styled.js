import styled from 'styled-components';

export const Li = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
`;

export const P = styled.p`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
`;

export const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  font-weight: 700;
  margin: 0 10px;
  padding: 5px;
  background-color: transparent;
  box-shadow: 0 0 2px;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
