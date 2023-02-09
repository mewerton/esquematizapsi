import { Header } from "../../components/Header"
import { Container } from "./styles"
import {BrowserRouter as Router, Route} from "react-router-dom"

export function Details(){
  return (
    <Container>
      <Router>
        <Header/>

      </Router>
    </Container>
  )
}



