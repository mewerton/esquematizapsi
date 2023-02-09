// import { Header } from "../../components/Header"
import { Container } from "./styles"
import {BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../Home"

export function Details(){

  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </Container>
  )
}



