import styled from "styled-components";

const SelectNumber = ({
  isSelectNumber,
  setIsSelectNumber,
  error,
  setError,
}) => {
  const arrNumeber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setIsSelectNumber(value);
    setError("");
  };

  return (
    <Container>
      <ErrorMsg>{error}</ErrorMsg>
      <div>
        {arrNumeber.map((value, i) => (
          <Box
            selected={value === isSelectNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </Container>
  );
};

export default SelectNumber;

const Container = styled.div`
  div {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    /* flex-wrap: wrap; */
  }

  p {
    display: flex;
    justify-content: end;
    font-size: 20px;
    font-weight: 600;
    margin-top: 20px;
  }
`;

const Box = styled.div`
  height: 65px;
  width: 65px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  gap: 20px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;

  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (!props.selected ? "black" : "white")};
`;

const ErrorMsg = styled.span`
  color: red;
  display: flex;
  justify-content: end;
  font-size: 20px;
  margin-bottom: 5px;
`;
