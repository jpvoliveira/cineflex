import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Index";
import Initial from "./Initial/Index";
import Film from "./Film/Index";
import Session from "./Session/Index";
import Sucess from "./Success/Index";
import { useState } from "react/cjs/react.development";
import './css/reset.css'
import './css/style.css'

export default function App() {
  const [dados, setDados] = useState({});
  const [user, setUser] = useState({});
  const [seat, setSeat] = useState([]);

  function sendFinish(item) {
    setDados(item);
  }

  function sendUser(item, seat) {
    setUser(item);
    setSeat(seat);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Initial />}></Route>
        <Route path="/filme/:idFilm" element={<Film />}></Route>
        <Route
          path="/sessao/:idSession"
          element={<Session sendFinish={sendFinish} sendUser={sendUser} />}
        ></Route>
        <Route
          path="/sucesso"
          element={<Sucess filmData={dados} user={user} seat={seat} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
