import React from "react";
import { MovieTile } from "../../components/MovieTile/MovieTile";
import "./styles.css";
//import "react-multi-carousel/lib/styles.css";

export const GenreList = (props) => {
  return (
    <div>
      <h1 className="genre-title">{props.title}</h1>
      <div className="genre-list">
        {props.movies.map((movie) => (
            <MovieTile key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
