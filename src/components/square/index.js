import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #c7e8f3;
  margin: 10px;
  border: 1px solid #fff;
  color: #ff8552;
  border-radius: 5px;
  float: left;
  margin-right: -1px;
  margin-top: 1px;
  padding: 0;
  width: 100px;
  height: 100px;
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  font-family: "MuseoModerno-Medium";

  &:focus {
    outline: none;
  }
`;

const Square = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Square;
