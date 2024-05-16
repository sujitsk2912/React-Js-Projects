import styled from "styled-components";

export const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px;
  min-width: 220px;
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  border: 1px solid transparent;
  transition: 0.3s background linear;

  &:hover {
    background-color: #212121;
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    transition: 0.3s background linear;
    cursor: pointer;
  }
`;

export const OutlineButton = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;
