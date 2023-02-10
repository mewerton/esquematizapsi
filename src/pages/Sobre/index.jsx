
import { Container } from "./styles";
import AmigasImg from "../../assets/amigascapa.jpg"


import { Title } from "../../components/Title";
import { HeaderB } from "../../components/HeaderB";
import { TitleB } from "../../components/TitleB";
import { AboutCard } from "../../components/AboutCard";

export function Sobre(){
    return(
        <Container>
            <div className="pageA">
                <HeaderB/>
                <div className="title-page">
                    <TitleB subtitle={"UM GRUPO DE ESTUDOS REGADO A CAFÉ E O DESEJO DE COMPARTILHAR CONHECIMENTOS, ASSIM NASCEU O:"} title={"ESQUEMATIZA PSICOLOGIA"} />
                </div>
                <div className="image-back">
                    <img src={AmigasImg} alt="" />
                </div>

            </div>
            <AboutCard/>
            
        </Container>
    )

}