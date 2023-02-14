import { TeamCard } from "../TeamCard";
import { Title } from "../Title";
import { Container } from "./styles";

export function Team(){
    return(
        <Container>
            <Title  title={"Siga-nos em nossas redes sociais!"} subtitle={"Nossa equipe de terapeutas"}/>
            <section className='team padding'>
              <div className='container'>
               <TeamCard id="cards"/>
              </div>
            </section>
        </Container>
    )

}