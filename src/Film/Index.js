import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./style.css";

export default function Film() {
  const [infoMovies, setInfoMovies] = useState(undefined);
  const { idFilm } = useParams();

  useEffect(() => {
    const promessa = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilm}/showtimes`
    );
    promessa.then((resposta) => {
      setInfoMovies(resposta.data);
    });
  }, []);
  if (infoMovies === undefined) {
    return "Loading...";
  } 
  else {
    return (
      <div className="film">
        <div className="title">Selecione o horário</div>
        {infoMovies.days.map((infos) => {
          return (
            <>
              <div className="day">{`${infos.weekday} - ${infos.date}`}</div>
              <div className="box-sections">
                {infos.showtimes.map((time) => {
                  return (
                    <Link to={`/sessao/${time.id}`}>
                      <div className="section">{time.name}</div>
                    </Link>
                  );
                })}
              </div>
            </>
          );
        })}
        <Footer infoMovies={infoMovies}/>
      </div>
    );
  }
}

function Footer({infoMovies}) {
  return (
    <div className="footer">
      <div className="box-film-footer">
        <img src={infoMovies.posterURL} alt={infoMovies.title} />
      </div>
      <p>{infoMovies.title}</p>
    </div>
  );
}
