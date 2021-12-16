import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

export default function Session() {
  const [infoSeat, setInfoSeat] = useState(undefined);
  const [available, setAvailable] = useState(false);
  const { idSession } = useParams();

  useEffect(() => {
    const promessa = axios.get(
      `https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSession}/seats`
    );
    promessa.then((resposta) => {
      setInfoSeat(resposta.data);
    });
  }, []);
  if (infoSeat === undefined) {
    return "Loading...";
  } else {
    return (
      <div className="session">
        <div className="title mini">Selecione o(s) assento(s)</div>
        <ul className="box-seat">
          {infoSeat.seats.map((item) => (
            <li
              key={item.id}
              onClick={() => setAvailable(true)}
              className={available ? "seat selected" : "seat"}
            >
              {item.id}
            </li>
          ))}
        </ul>
        <BoxSubtitle />
        <PersonalData />
        <div className="box-reserve">
          <Link to="/sucesso">
            <button className="reserve">Reservar assento(s)</button>
          </Link>
        </div>
        <div className="footer">
          <div className="box-film-footer">
            <img src={infoSeat.movie.posterURL} alt={infoSeat.movie.title} />
          </div>
          <div className="finish">
            <p>{infoSeat.movie.title}</p>
            <p>{`${infoSeat.day.weekday} - ${infoSeat.name}`}</p>
          </div>
        </div>
      </div>
    );
  }
}

function BoxSubtitle() {
  return (
    <div className="box-subtitle">
      <div className="subtitle">
        <div className="seat selected border-remove"></div>
        <p>Selecionado</p>
      </div>
      <div className="subtitle">
        <div className="seat border-remove"></div>
        <p>Disponível</p>
      </div>
      <div className="subtitle">
        <div className="seat unavailable border-remove"></div>
        <p>Indisponível</p>
      </div>
    </div>
  );
}

function PersonalData() {
  return (
    <div className="personal-data">
      <div className="name">
        <p>Nome do comprador:</p>
        <input type="text" placeholder="Digite seu nome..." />
      </div>
      <div className="cpf">
        <p>CPF do comprador:</p>
        <input type="text" placeholder="Digite seu CPF..." />
      </div>
    </div>
  );
}
