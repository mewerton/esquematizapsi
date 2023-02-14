import styled from "styled-components";

export const Container = styled.div`

display: flex;
gap: 1rem;
border-radius: 5px;

@media screen and (max-width: 600px){
    flex-direction: column;
    margin: 1rem;
}
`