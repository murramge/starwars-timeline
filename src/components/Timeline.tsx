import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetFilmsQuery } from "../generated/graphql";

const Timeline: React.FC = () => {
  const { data, loading, error } = useGetFilmsQuery();
  const navigate = useNavigate();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data?.allFilms?.films);

  const handleFilmClick = (id: string) => {
    navigate(`/film/${id}`);
  };

  return (
    <div className="timeline-container">
      {data?.allFilms?.films?.map((film: any, index) => (
        <div
          key={index}
          className="timeline-item"
          onClick={() => handleFilmClick(film.id)}>
          <h3 className="timeline-title">{film.title}</h3>
          <p className="timeline-date">
            {new Date(film.releaseDate).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
