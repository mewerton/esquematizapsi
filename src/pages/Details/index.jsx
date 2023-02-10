// import { Header } from "../../components/Header"
import { Container } from "./styles"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../Home"
import { Sobre } from "../Sobre"

export function Details(){

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}



