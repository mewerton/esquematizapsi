import { CoursesCard } from "../../components/CoursesCard";
import { HeaderB } from "../../components/HeaderB";
import { OnlineCourses } from "../../components/OnlineCourses";
import { Testimonial } from "../../components/Testimonial";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function Cursos(){
    return(
        <Container>
            <HeaderB/>
            <Title subtitle={"CURSOS"} title={"Grupo de estudo, Cine TE, Ebook e muito mais!"}/>
            <CoursesCard/>
            <OnlineCourses/>
            <Testimonial/>
        </Container>
    )
}