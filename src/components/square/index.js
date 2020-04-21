import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #2980b9;
  border: 1px solid gray;
  float: left;
  margin-right: -1px;
  margin-top: 1px;
  padding: 0;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  line-height: 100px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const Square = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Square;
