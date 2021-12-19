import { Link } from "react-router-dom";
import "./style.css";

export default function Sucess({ filmData, user, seat }) {
  return (
    <div className="sucess">
      <div className="title txt">
        Pedido feito
        <br />
        com sucesso!
      </div>
      <Confirmation filmData={filmData} user={user} seat={seat} />
      <div className="box-reserve">
        <Link to="/">
          <button className="reserve margin-small">Voltar para Home</button>
        </Link>
      </div>
    </div>
  );
}

function Confirmation({ filmData, user, seat }) {
  return (
    <div className="confirmation">
      <div className="container">
        <span>Filme e sessão</span>
        <p>{filmData.movie.title}</p>
        <p>
          {filmData.day.date} - {filmData.name}
        </p>
      </div>
      <div className="container">
        <span>Ingressos</span>
        {seat.map((item) => (
          <p>Assento {item}</p>
        ))}
      </div>
      <div className="container">
        <span>Comprador</span>
        <p>Nome: {user.name}</p>
        <p>CPF: {user.cpf}</p>
      </div>
    </div>
  );
}
