import styled from "styled-components";

export const Container = styled.div`

.box{
    margin-bottom: 1rem;
}

.faq .container{
    max-width: 80%;
    border-radius: 20px;
}

.faq button{
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    width: 100%; 
    padding: 15px 20px;
}

.faq h2{
    font-weight: 500;
}

.faq p{
    padding: 20px;
    background-color:rgba(255,255,255, 0.3);
    color: #5f1a2c;
    text-align: justify;
}

.faq .accordion{
    transition: 0.5s;
}

.faq .accordion:hover{
    background-color: pink;
    color: #5f1a2c;
}

@media screen and (max-width: 600px){
    .faq h2{
        font-size: 14px;
}
    .faq p{
    font-size: 14px;
}
}

`