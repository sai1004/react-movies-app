import React from "react";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h2> My Movies </h2>
      <p> List Of Movies: {movies.length} </p>
    </div>
  );
};

export default Nav;
