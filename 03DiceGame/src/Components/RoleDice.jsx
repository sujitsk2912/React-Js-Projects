import styled from "styled-components";


const RoleDice = ({ roleDice, currentDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice_${currentDice}.png`} alt="dice 1" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  div {
    display: grid;
    place-items: center;
    gap: 15px;
    cursor: pointer;
  }
  img {
    max-width: 200px;
    max-height: 200px;
  }

  p {
    font-size: 22px;
    font-weight: 500;
  }
`;
