import React from "react";
import { useQuery } from "@apollo/client";
import { GET_FILMS } from "../queries/getFilms";

const Timeline = () => {
  const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <p>Loading..</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      {data.allFilms.films.map((film, index) => (
        <div key={index}>
          <h3>{film.title}</h3>
          <p>{new Date(film.releaseDate).toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
};
export default Timeline;
