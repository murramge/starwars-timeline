import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";
import Timeline from "./components/Timeline";
import FilmDetails from "./components/FilmDetails";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Timeline />} />
        <Route path="/film/:id" element={<FilmDetailsWrapper />} />
      </Routes>
    </Router>
  );
};

const FilmDetailsWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return id ? <FilmDetails id={id} /> : <p>Invalid ID</p>;
};

export default App;
