import { Link } from "react-router-dom";
import "./style.css";

export default function Sucess() {
  return (
    <div className="sucess">
      <div className="title txt">
        Pedido feito
        <br />
        com sucesso!
      </div>
      <Confirmation />
      <div className="box-reserve">
        <Link to="/">
          <button className="reserve margin-small">Voltar para Home</button>
        </Link>
      </div>
    </div>
  );
}

function Confirmation() {
  return (
    <div className="confirmation">
      <div className="container">
        <span>Filme e sessão</span>
        <p>Filme 1</p>
        <p>Data - Hora</p>
      </div>
      <div className="container">
        <span>Ingressos</span>
        <p>Assento 01</p>
      </div>
      <div className="container">
        <span>Comprador</span>
        <p>Nome: Fulano</p>
        <p>CPF: 000.000.000-00</p>
      </div>
    </div>
  );
}
