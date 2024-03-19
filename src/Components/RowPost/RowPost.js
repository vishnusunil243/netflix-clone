import React, { useEffect, useState } from "react";
import "./RowPost.css";
import Axios from "../../Axios";
import { API_KEY, imageUrl } from "../../Constants/Constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [count, setCount] = useState(0);
  const [movies, setMovies] = useState([]);
  const [urlid, setUrlId] = useState("");
  useEffect(() => {
    Axios.get(props.url)
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("network error");
      });
  }, []);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovie = (id) => {
    setCount((prevCount) => prevCount + 1);
    if (count % 2 === 0) {
      Axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(
        (response) => {
          if (response.data.results.length !== 0) {
            setUrlId(response.data.results[0]);
          } else {
            console.log("array empty");
          }
        }
      );
    } else {
      setUrlId("");
    }
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => {
          return (
            <img
              key={obj.id}
              onClick={() => {
                handleMovie(obj.id);
              }}
              className={props.isSmall ? "smallposter" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="posters"
            />
          );
        })}
      </div>
      {urlid && <Youtube opts={opts} videoId={urlid.key} />}
    </div>
  );
}

export default RowPost;
