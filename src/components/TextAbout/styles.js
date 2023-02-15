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
    color: gray;
}

.text{
    padding: 0rem 2rem 2rem 2rem;
    background-color: white;
    border-radius: 10px;
    transition: 0.5s;
}

.text:hover{
    background-color: #b66d8a;
    p{
    color: white;
}
}

@media screen and (max-width: 768px){

margin: 7rem 4rem 0rem 4rem;
padding: 0rem 2rem 2rem 2rem;

    p{
        font-size: 16px;
    }

}

@media screen and (max-width: 600px){

margin: 1rem 2rem 2rem 2rem;
padding: 0rem 0rem 0rem 0rem;
    p{

        font-size: 14px;
    }

    .text{
        padding: 0rem 1rem 1rem 1rem;
        background-color: rgba(255,255,255, 0.3);
        border-radius: 10px;
}

}
`