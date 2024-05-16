import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import styled from "styled-components";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  const BASE_URL = "http://localhost:9000";

  useEffect(() => {
    const FetchFoodData = () => {
      fetch(BASE_URL)
        .then((response) => response.json())
        .then((data) => {
          setData(data);
          setFilterData(data);
        })
        .catch(() => {
          setError("Unable to fetch data...");
        });
    };
    FetchFoodData();
  }, []);

  const searchFoodName = (value) => {
    if (value === "" || !value) {
      setFilterData(null);
    }

    const Filter = data?.filter((food) =>
      food.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilterData(Filter);
  };

  const filterFood = (type) => {
    if (type == "all") {
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }
    const Filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilterData(Filter);
    setSelectedBtn(type);
  };

  return (
    <Main className="flex flex-col  items-center justify-center relative">
      <Navbar
        searchFoodName={searchFoodName}
        filterFood={filterFood}
        selectedBtn={selectedBtn}
      />
      <Container className=" grid max-sm:gap-0  max-sm:pb-10 gap-10 p-4 max-w-7xl grid-cols-3 max-sm:grid-cols-1  max-lg:grid-cols-2 overflow-auto ">
        <Cards data={filterData} />
      </Container>
    </Main>
  );
}

export default App;

const Main = styled.main`
  /* background-color: #212121; */

  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/public/images/bg.png);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
`;

const Container = styled.div`
  height: calc(100vh - 135px);
  scrollbar-width: none;
`;
