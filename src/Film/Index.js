import { Link } from "react-router-dom";
import "./style.css";

export default function Film() {
  return (
    <div className="film">
      <div className="title">Selecione o horário</div>
      <div className="day"> Dia 1 - 01/01/01</div>
      <div className="box-sections">
        <Link to="/sessao">
          <div className="section">15:00</div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function Footer(){
  return(
    <div className="footer">
      <div className="box-film-footer">
        <img src="#" alt="Filme 1" />
      </div>
      <p>Nome filme</p>
    </div>
  )
}