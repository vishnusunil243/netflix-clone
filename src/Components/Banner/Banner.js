import React, { useEffect, useState } from "react";
import "./Banner.css";
import Axios from "../../Axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";

function Banner() {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState();
  useEffect(() => {
    setLoading(true);
    Axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then(
      (response) => {
        const movies = response.data.results;
        const randomIndex = Math.floor(Math.random() * movies.length);
        setMovie(movies[randomIndex]);
      }
    );
    setLoading(false);
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }}
      className="banner"
    >
      {loading && <h1>Loading image...</h1>}
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
