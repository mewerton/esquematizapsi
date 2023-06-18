import { Title } from "../Title";
import { Container } from "./styles";

export function TextAbout(){
    return(
        <Container>
            <div className="title"></div>
            {/* <h3>Conheça nossa história</h3> */}
            <Title subtitle={"Conheça nossa história"}/>
            <div className="text">
                <br />
                <p>
                Somos três psicólogas apaixonadas pela Terapia do Esquema. Nos conhecemos em 2018 durante a formação em terapia do esquema, nos tornamos amigas e começamos a nos reunir para compartilhar nossas descobertas, discutir casos e estudar de forma mais profunda a abordagem. Sempre acompanhadas de um bom cafezinho ou uma taça de vinho.
                <br />
                <br />

                Mas, além do nosso amor pela Terapia do Esquema, também tínhamos o desejo de compartilhar nossos conhecimentos com um público maior e formar uma rede de apoio para outros psis. E assim nasceu o projeto “Esquematiza Psicologia”!

                <br />
                <br />

                O objetivo era criar um grupo de estudos online para psicólogos que desejavam entender mais sobre a Terapia do Esquema e poder aplicá-la em seus pacientes de forma eficaz. Assim criamos um grupo atualizado, que cobre os principais aspectos da terapia do esquema.
                <br />
                <br />

                Foi um desafio e tanto, estávamos determinadas a oferecer o melhor conteúdo possível. Dividimos tarefas, cada uma trazendo sua sabedoria e experiência para a equipe. A colaboração mútua foi fundamental para o sucesso do projeto.

                <br />
                <br />
                O primeiro grupo de estudos foi lançado em 2021, muitos psicólogos curiosos sobre a Terapia do Esquema e outros que já eram terapeutas do esquema se inscreveram, o que nos motivou bastante a continuar esse projeto que temos tanto carinho e que vem crescendo mais a cada dia.
                <br />
                <br />
                Em resumo, a história do “Esquematiza Psicologia” é um exemplo de como a paixão e a amizade podem ser combinadas para criar algo realmente transformador. Nosso projeto não apenas ensina a Terapia do Esquema, mas também inspira outros a seguirem seus sonhos e a se unirem em causas que acreditam.
                </p>
            </div>
        </Container>
    )

}