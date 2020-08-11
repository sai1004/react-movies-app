import React from "react";

/*  alertnate way accessing props
const Movie = ({ name, price }) => { 
 <h3>   {name} <span> {price} </span> </h3> }
*/
const Movie = (props) => {
  return (
    <div>
      <h3>
        {props.name} <span> {props.price} </span>
      </h3>
    </div>
  );
};

export default Movie;
