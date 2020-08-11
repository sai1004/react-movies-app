import React, { useState, createContext } from "react";
import Nav from "./Nav";
import MoviesList from "./MoviesList";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$19",
      id: 21341,
    },
    {
      name: "Games Of Throne",
      price: "$90",
      id: 241,
    },
    {
      name: "Hungger Games",
      price: "$55",
      id: 24541,
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
