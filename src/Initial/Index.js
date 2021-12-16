import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function Initial() {
  const [movies, setMovies] = useState(undefined);

  useEffect(() => {
    const promessa = axios.get(
      "https://mock-api.driven.com.br/api/v4/cineflex/movies"
    );
    promessa.then((resposta) => {
      setMovies(resposta.data);
    });
  }, []);

  if (movies === undefined) {
    return "Loading...";
  } else {
    return (
      <div className="initial">
        <div className="title">Selecione o filme</div>
        <div className="options-film">
          {movies.map((movie) => {return(
            <Link to={`/filme/${movie.id}`}>
                <div className="box-film">
                  <img src={movie.posterURL} alt={movie.title} />
                </div>
            </Link>
          )})}
        </div>
      </div>
    );
  }
}
