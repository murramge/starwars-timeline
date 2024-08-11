import React from "react";
import { useGetFilmByIdQuery } from "../generated/graphql";

const FilmDetails: React.FC<{ id: string }> = ({ id }) => {
  const { data, loading, error } = useGetFilmByIdQuery({ variables: { id } });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data?.film?.title}</h1>
      <p>Directed by: {data?.film?.director}</p>
      <p>Release Date: {data?.film?.releaseDate}</p>
      <p>{data?.film?.openingCrawl}</p>
    </div>
  );
};

export default FilmDetails;
