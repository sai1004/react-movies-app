import React, { useState } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";
import { useContext } from "react";

const MoviesList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {movies.map((movie) => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
};

export default MoviesList;
