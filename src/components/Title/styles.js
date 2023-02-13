import styled from "styled-components";

export const Container =  styled.div`
#heading{
    text-align: center;
    padding: 40px 0;

}

#heading h3{
    font-weight: 600;
    letter-spacing: 1px;
    color: ${({theme}) => theme.COLORS.PINK_400};
    text-transform: uppercase;
}


#heading h1{
    font-size: 45px;
    margin: 20px 0;
    text-transform: capitalize;
    color: ${({theme}) => theme.COLORS.PINK_900};
}

p{
    line-height: 30px;
    font-size: 18px;

}

@media screen and (max-width:600px){
   
    #heading h3{
        margin-top: 1.5rem;
        font-size: 18px;
    }
    #heading h1{
        font-size: 30px;
    }

}


`