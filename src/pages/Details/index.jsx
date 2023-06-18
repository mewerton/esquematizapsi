// import { Header } from "../../components/Header"
import { Container } from "./styles"
import {BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom"
import { Home } from "../Home"
import { Sobre } from "../Sobre"
import { Cursos } from "../Cursos"
import { Terapeutas } from "../Terapeutas"
import { Psicoterapia } from "../Psicoterapia"
import { Supervisao } from "../Supervisao"

import { AnimatePresence } from "framer-motion"

export function Details(){

  const location = useLocation()

  return (
    <Container>
      
      
     
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home/>}/>
            <Route path="/cursos" element={<Cursos/>}/>
            <Route path="/supervisao" element={<Supervisao/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="/terapeuras" element={<Terapeutas/>}/>
            <Route path="/psicoterapia" element={<Psicoterapia/>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
          </Routes>
        </AnimatePresence>
        
      
      
    </Container>
  )
}



