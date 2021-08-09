import axios from "./axios";
import React, { useEffect, useState } from "react";
import "./Banner.css";
import requests from "./requests.js";
function Banner() {
  const [movie, setMovie] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${base_url}${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/*Title */}
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button"> Play</button>
          <button className="banner__button">Playlist</button>
        </div>
        {/*Buttons for Play and WAtch*/}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
        {/*Description */}
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
