import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Board from "../../components/board/index";

import { calculateWinner } from "../../utils/utils";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #07beb8;
  }
`;

const StyledTitle = styled.h1`
  text-align: center;
  margin-top: 10px;
  font-size: 40px;
  font-family: "MuseoModerno-Light";
  color: #ffff;
`;

const StyledGame = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`;

const StyledGameBoard = styled.div``;

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      xIsNext: true,
      stepNumer: 0,
      history: [{ squares: Array(9).fill(null) }],
    };
  }

  handleClick(index) {
    const { history, stepNumer, xIsNext } = this.state;
    const record = history.slice(0, stepNumer + 1);
    const current = record[history.length - 1];
    const squares = current.squares.slice();
    const winner = calculateWinner(squares);
    if (winner || squares[index]) {
      return;
    }
    squares[index] = xIsNext ? "X" : "O";
    this.setState({
      history: record.concat({ squares: squares }),
      xIsNext: !xIsNext,
      stepNumer: history.length,
    });
  }

  render() {
    const { history, stepNumer } = this.state;
    const current = history[stepNumer];

    // const winner = calculateWinner(current.squares);
    // const moves = history.map((step, move) => {
    //   const checkMove = move ? `Go to number ${step}` : "Start the game";
    //   return {
    //     <li>
    //       <button onClick=""></button>
    //     </li>
    //   }
    // });

    return (
      <>
      <GlobalStyle/>
        <StyledTitle>Tic Tac Toe</StyledTitle>
        <StyledGame>
          <StyledGameBoard>
            <Board
              onClick={(index) => this.handleClick(index)}
              squares={current.squares}
            ></Board>
          </StyledGameBoard>
        </StyledGame>
        </>
    );
  }
}
