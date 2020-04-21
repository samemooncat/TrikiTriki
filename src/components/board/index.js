import React from "react";
import styled from "styled-components";

import Square from "../square/index";

const StyledBorderRow = styled.div`
  &::after {
      clear: both;
      content: "";
      display: table;
  }
`;

const Board = ({ squares, onClick }) => {
    
  const renderSqueare = (index) => {
    return <Square onClick={()=>onClick(index)}>{squares[index]}</Square>;
  };

  return (
    <div>
      <StyledBorderRow>
        {renderSqueare(0)}
        {renderSqueare(1)}
        {renderSqueare(2)}
      </StyledBorderRow>
      <StyledBorderRow>
        {renderSqueare(3)}
        {renderSqueare(4)}
        {renderSqueare(5)}
      </StyledBorderRow>
      <StyledBorderRow>
        {renderSqueare(6)}
        {renderSqueare(7)}
        {renderSqueare(8)}
      </StyledBorderRow>
    </div>
  );
};

export default Board;
