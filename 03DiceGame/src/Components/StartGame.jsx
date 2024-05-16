import styled from "styled-components";

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/public/images/bg.png" alt="" />
      </div>
      <div className="content">
        <h2>DICE GAME</h2>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-width: 1182px;
  margin: 0 auto;

  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }

  img {
    height: 522px;
    width: 649px;
  }

  h2 {
    font-size: 96px;
    white-space: nowrap;
  }
`;

const Button = styled.button`
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
