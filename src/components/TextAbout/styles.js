import styled from "styled-components";

export const Container = styled.div`

margin: 1rem 2rem 3rem 2rem;
padding: 4rem 4rem 4rem 4rem;
align-items: center;


h3{
    text-align: center;
    font-size: 30px;
}
p{
    text-align: justify;
    font-size: 18px;
}

@media screen and (max-width: 768px){

margin: 7rem 4rem 0rem 4rem;
padding: 0rem 2rem 2rem 2rem;

p{
    font-size: 16px;
}

}

@media screen and (max-width: 600px){

margin: 8rem 2rem 0rem 2rem;
padding: 0rem 0rem 0rem 0rem;
p{

    font-size: 14px;
}

}
`