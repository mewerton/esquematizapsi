import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { TitleB } from "../../components/TitleB";
import { Container } from "./styles";
import AmigasImg from "../../assets/mao.jpg";
import { SupervisionCard } from "../../components/SupervisionCard";
import { FaqSupervision } from "../../components/FaqSupervision";

import { motion } from "framer-motion"

export function Supervisao(){
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
                    <TitleB 
                        subtitle={"Interesse em obter feedback e orientação especializada para melhorar a prática clínica? conheça nossa"} 
                        title={"SUPERVISÃO"} 
                    />
                </div>
                <div className="image-back">
                    <img src={AmigasImg} alt="" />
                </div>

            </div>
            <SupervisionCard/>
            <FaqSupervision/>
            </motion.div>
            <Footer/>
        </Container>
    )

}