import { Container } from "./styles";

export function Title({subtitle, title }){
    return(
        <Container>
            <div id="heading">
                <h3>{subtitle}</h3>
                <h1>{title}</h1>
            </div>
        </Container>
    )
}