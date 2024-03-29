import React, { useState, useEffect } from "react";
import { fetchGenreList } from "../axios.js";
import { Link } from "react-router-dom";
import "../style/LeftSidebar.css";

export const LeftSidebar = ({ handleGenreClick }) => {
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    fetchAPI();
  }, []);
  const fetchAPI = async () => {
    setGenres(await fetchGenreList());
  };
  console.log(genres);
  return (
    <div className="genres">
      <h3>Genre</h3>
      <div className="genrelist">
        {genres?.map((genre) => {
          return (
            <Link to="/">
              <button key={genre.id} onClick={() => handleGenreClick(genre.id)}>
                {genre.name}
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
