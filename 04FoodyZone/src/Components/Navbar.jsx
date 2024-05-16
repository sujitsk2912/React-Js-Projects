import styled from "styled-components";
import { useState } from "react";
import { data } from "autoprefixer";

const Navbar = ({ searchFoodName, filterFood, selectedBtn }) => {
  const searchFood = (e) => {
    const searchValue = e.target.value;
    searchFoodName(searchValue);
  };

  const filterBtn = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <header className="container bg-stone-700 flex gap-4 w-full max-w-full  m-auto p-5 flex-col justify-center items-center">
      <nav className=" navbar flex flex-wrap justify-between max-sm:justify-center gap-3 items-center w-full  sm:pl-10 sm:pr-10">
        <h2 className="text-3xl font-bold text-white  ">
          F<span className="text-red-600">oo</span>dy Z
          <span className="text-red-600">o</span>ne
        </h2>
        <input
          onInput={searchFood}
          className="px-3 max-sm:w-full py-2 rounded-lg outline-none  "
          type="search"
          id="enter"
          placeholder="Search food..."
        />
      </nav>

      <ButtonContainer className="mt-0 nav-buttons flex-wrap flex gap-4 justify-center items-center w-full max-w-md">
        {filterBtn.map((value) => (
          <Button
            isSelected={selectedBtn == value.type}
            key={value.name}
            onClick={() => filterFood(value.type)}
          >
            {value.name}
          </Button>
        ))}
      </ButtonContainer>
    </header>
  );
};

export default Navbar;

const ButtonContainer = styled.div`
  @media (max-width: 456px) {
    gap: 10px;
  }
`;
const Button = styled.button`
  background-color: ${({ isSelected }) =>
    isSelected ? "#f20505da" : "#ff3030"};
  outline: ${({ isSelected }) => (isSelected ? "1px solid white" : "")};
  color: #fff;
  padding: 8px 20px;
  border-radius: 5px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #f20505da;
  }

  @media (max-width: 456px) {
    padding: 10px;
    font-size: 12px;
    justify-content: space-between;
  }
`;
