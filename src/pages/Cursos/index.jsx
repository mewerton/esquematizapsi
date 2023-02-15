import { AwRapper } from "../../components/AWrapper";
import { CoursesCard } from "../../components/CoursesCard";
import { Footer } from "../../components/Footer";
import { HeaderB } from "../../components/HeaderB";
import { OnlineCourses } from "../../components/OnlineCourses";
import { Testimonial } from "../../components/Testimonial";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function Cursos(){
    return(
        <Container>
            <HeaderB/>
            <Title subtitle={"Grupo de estudos, Cine TE, Ebook e muito mais!"} title={"CONFIRA NOSSOS CURSOS"}/>
            <CoursesCard/>
            <OnlineCourses/>
            <Testimonial/>
            
            <Footer/>
        </Container>
    )
}