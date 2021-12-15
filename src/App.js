import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header/Index";
import Initial from "./Initial/Index";
import Film from "./Film/Index";
import Session from "./Session/Index";
import Sucess from "./Success/Index";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Initial />}></Route>
        <Route path="/filme" element={<Film />}></Route>
        <Route path="/sessao" element={<Session />}></Route>
        <Route path="/sucesso" element={<Sucess />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
