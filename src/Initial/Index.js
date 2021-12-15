import { Link } from "react-router-dom";
import "./style.css";

export default function Initial() {
  return (
    <div className="initial">
      <div className="title">Selecione o filme</div>
      <div className="options-film">
        <Link to="/filme">
          <div className="box-film">
            <img src="#" alt="Filme 1" />
          </div>
        </Link>
      </div>
    </div>
  );
}
