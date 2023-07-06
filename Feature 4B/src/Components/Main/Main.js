import React, { useState, useEffect } from "react";
import { getAllRecipes } from "/src/Common/Services/LearnService";
import MainList from "./MainList";
import SearchList from "./SearchList.js";

/* MAIN MODULE WITH STATEFUL PARENT AND STATELESS CHILD */
const Main = () => {
  // Variables in the state to hold data
  const [recipes, setRecipes] = useState([]);
  const buttonText = "Search";
  // UseEffect to run when the page loads to
  // obtain async data and render
  useEffect(() => {
    getAllRecipes().then((recipes) => {
      console.log(recipes);
      setRecipes(recipes);
    });
  }, []);
  const handleSearch = (searchTerm) => {
    // Handle the search logic here
    console.log("Search term:", searchTerm);
  };

  return (
    <div>
      Welcome to the Recipe Page.
      <MainList recipes={recipes} />
      <SearchList data={buttonText} onChildClick={handleSearch} />
    </div>
  );
};

export default Main;
