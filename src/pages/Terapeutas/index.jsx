import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { Team } from "../../components/Team";
import { TeamCard } from "../../components/TeamCard";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function Terapeutas(){
    return(
        <Container>
            <HeaderB/>
            <Team/>
            <Footer/>
        </Container>
    )
}