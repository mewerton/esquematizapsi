import { AwRapper } from "../../components/AWrapper";
import { CoursesCard } from "../../components/CoursesCard";
import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { OnlineCourses } from "../../components/OnlineCourses";
import { Testimonial } from "../../components/Testimonial";
import { Title } from "../../components/Title";
import { Container } from "./styles";

import { motion } from "framer-motion"

export function Cursos(){
    return(
        <Container>
            <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1 }}
                exit={{ opacity:0 }} 
                
                >
            <HeaderB/>
            <Title subtitle={"Grupo de estudos, Cine TE, Ebook e muito mais!"} title={"CONFIRA NOSSOS CURSOS"}/>
            <CoursesCard/>
            <OnlineCourses/>
            <Testimonial/>

            </motion.div>

            <Footer/>
        </Container>
    )
}