import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <Score>
      <h2>{score}</h2>
      <p>Total Score</p>
    </Score>
  );
};

export default TotalScore;

const Score = styled.div`
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  h2 {
    font-size: 80px;
    font-weight: 500;
    line-height: 100px;
  }

  p {
    font-size: 20px;
    font-weight: 500;
    white-space: nowrap;
  }
`;
