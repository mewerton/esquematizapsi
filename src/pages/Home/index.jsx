import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { Container } from "./styles";

import { motion } from "framer-motion"
import { HeaderB } from "../../components/HeaderB";

export function Home(){
    return(
        <Container>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity:0 }} 
                
                >
                
                <HeaderB/>
                <Hero/>
            </motion.div>
        </Container>
    )

}

