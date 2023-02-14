// import { Header } from "../../components/Header"
import { Container } from "./styles"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../Home"
import { Sobre } from "../Sobre"
import { Cursos } from "../Cursos"
import { Terapeutas } from "../Terapeutas"

export function Details(){

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cursos" element={<Cursos/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/terapeuras" element={<Terapeutas/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}



