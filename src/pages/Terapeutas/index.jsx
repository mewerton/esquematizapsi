import { AwRapper } from "../../components/AWrapper";
import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { Team } from "../../components/Team";
import { TeamCard } from "../../components/TeamCard";
import { TextTeam } from "../../components/TextTeam";
import { Title } from "../../components/Title";
import { Container } from "./styles";

import { motion } from "framer-motion"

export function Terapeutas(){
    return(
        <Container>
            
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity:0 }} 
                
                >
            <HeaderB/>
            <Team/>
            <TextTeam/>

            </motion.div>
            <Footer/>
        </Container>
    )
}