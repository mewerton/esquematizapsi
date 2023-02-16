
import { Container } from "./styles";
import AmigasImg from "../../assets/amigascapa.jpg"


import { Title } from "../../components/Title";
import { HeaderB } from "../../components/HeaderB";
import { TitleB } from "../../components/TitleB";
import { AboutCard } from "../../components/AboutCard";
import { TextAbout } from "../../components/TextAbout";
import { Faq } from "../../components/Faq";
import { Footer } from "../../components/Footer";

import { motion } from "framer-motion"

export function Sobre(){
    return(
        <Container>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity:0 }} 
            >
            <HeaderB/>
            <div className="pageA">
                
                <div className="title-page">
                    <TitleB subtitle={"UM GRUPO DE ESTUDOS REGADO A CAFÉ E O DESEJO DE COMPARTILHAR CONHECIMENTOS, ASSIM NASCEU O"} title={"ESQUEMATIZA PSICOLOGIA"} />
                </div>
                <div className="image-back">
                    <img src={AmigasImg} alt="" />
                </div>

            </div>
            
            <AboutCard/>
            <Faq/>
            <TextAbout/>

            </motion.div>
            <Footer/>
            
        </Container>
    )

}

