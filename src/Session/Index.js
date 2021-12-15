import { Link } from "react-router-dom";
import "./style.css";

export default function Session() {
  return (
    <div className="session">
      <div className="title mini">Selecione o(s) assento(s)</div>
      <ul className="box-seat">
        <li className="seat">01</li>
      </ul>
      <BoxSubtitle />
      <PersonalData />
      <div className="box-reserve">
        <Link to="/sucesso">
          <button className="reserve">Reservar assento(s)</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
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

function Footer() {
  return (
    <div className="footer">
      <div className="box-film-footer">
        <img src="#" alt="Filme 1" />
      </div>
      <div className="finish">
        <p>Nome filme</p>
        <p>Dia - Hora</p>
      </div>
    </div>
  );
}
