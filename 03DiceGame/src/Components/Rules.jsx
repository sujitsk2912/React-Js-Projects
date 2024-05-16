import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h3>How to play dice game</h3>
      <div>
        <ul>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted </li>
        </ul>
      </div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.section`
  background-color: #ffb6c17c;
  padding: 20px;
  display: grid;
  gap: 10px;

  ul {
    list-style: none;
  }

  li {
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
  }
`;
