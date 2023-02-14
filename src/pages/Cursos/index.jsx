import { CoursesCard } from "../../components/CoursesCard";
import { HeaderB } from "../../components/HeaderB";
import { OnlineCourses } from "../../components/OnlineCourses";
import { Title } from "../../components/Title";
import { Container } from "./styles";

export function Cursos(){
    return(
        <Container>
            <HeaderB/>
            <Title subtitle={"CURSOS"} title={"Grupo de estudo, CineTv, Ebook e muito mais!"}/>
            <CoursesCard/>
            <OnlineCourses/>
        </Container>
    )
}