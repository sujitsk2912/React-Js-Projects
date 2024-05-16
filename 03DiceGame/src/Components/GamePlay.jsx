import { useState } from "react";
import RoleDice from "./RoleDice";
import SelectNumber from "./SelectNumber";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [currentDice, setCurrentDice] = useState(1);
  const [isSelectNumber, setIsSelectNumber] = useState(null);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  const GenerateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (isSelectNumber === null) {
      setError("You have not selected any number");
      return;
    }
    setError("");

    const randomNumber = GenerateRandomNumber(1, 7);
    setCurrentDice(randomNumber);

    if (isSelectNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    console.log(
      `selected number ${isSelectNumber} and currentDice is ${currentDice} and score is ${score}`
    );
    setIsSelectNumber(null);
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <Main>
      <Header>
        <TotalScore score={score} />
        <SelectNumber
          error={error}
          setError={setError}
          isSelectNumber={isSelectNumber}
          setIsSelectNumber={setIsSelectNumber}
        />
      </Header>
      <div>
        <RoleDice roleDice={roleDice} currentDice={currentDice} />
      </div>
      <div className="btns">
        <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>{" "}
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button>
      </div>
      {showRules && <Rules />}
    </Main>
  );
};

export default GamePlay;

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  .btns {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Header = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  max-height: 131px;
  margin-top: 40px;
  width: 100%;
`;
