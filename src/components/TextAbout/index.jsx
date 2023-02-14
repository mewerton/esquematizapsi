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
                Somos apaixonadas pela Terapia do Esquema, nos conhecemos no curso de formação, nos tornamos amigas e adorávamos nos reunir para discutir nossas descobertas e ideias, sempre acompanhadas de uma taça de vinho.
                <br />
                <br />

                Mas, além do nosso amor pela  Terapia do Esquema, também tínhamos o desejo de compartilhar nossos conhecimentos com um público maior, percebemos que havia uma demanda grande por conhecimento sobre a Terapia do Esquema e decidimos unir suas forças para compartilhar nossos conhecimentos com mais pessoas. Assim nasceu o projeto “Esquematiza Psicologia”.
                <br />
                <br />

                O objetivo era criar um curso online para psicólogos que desejavam entender mais sobre a Terapia do Esquema e poder aplicá-la em seus pacientes de forma eficaz. Assim compartilhamos nossos conhecimentos e habilidades para criar um curso atualizado, que cobre os principais aspectos da terapia do esquema.
                <br />
                <br />

                A criação do curso foi um desafio e tanto, estávamos determinadas a oferecer o melhor conteúdo possível. Dividimos tarefas, cada uma trazendo sua expertise e experiência para a equipe. A colaboração mútua foi fundamental para o sucesso do projeto.
                <br />
                <br />
                O primeiro grupo de estudos foi lançado em 2020, muitos psicólogos se inscreveram para aprender mais sobre a Terapia do Esquema, o que nos motivou bastante a continuar esse projeto que temos tanto carinho.
                <br />
                <br />
                Em resumo, a história do “Esquematiza Psicologia” é um exemplo de como a paixão e a amizade podem ser combinadas para criar algo realmente transformador. Nosso projeto não apenas ensina a Terapia do Esquema, mas também inspira outros a seguirem seus sonhos e a se unirem em causas que acreditam.
                </p>
            </div>
        </Container>
    )

}