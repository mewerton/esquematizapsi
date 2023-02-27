import styled from "styled-components";

export const Container = styled.div`
.hero{
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    padding-top: 20%;
    padding-right: 50px;
    color: ${({theme}) => theme.COLORS.PINK_900};

}

.hero img{
    
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: right;

       /* -webkit-mask-attachment: fixed; */
}

.hero #heading{
    text-align: left;
    margin: 0;
    padding: 0;
}


.row{
    width: 60%;
}

.row p{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    border-radius: 5px;
    padding: 5px 5px;
    text-align: justify;
}

@media screen and (max-width: 920px){
    .margin{
        height: 40vh;
    }

    .hero{
        padding-top: 30%;
        height: 100vh;
    }
    .hero .row{
        width: 50%;
    }
    .hero img{
        object-position: right;
    }
    
}

@media screen and (max-width: 605px){
    .margin{
        height: 40vh;
    }

    .hero{
        padding-top: 160%;
        height: 70vh;
       
        
    }
    .hero .row{
        width: 100%;
        margin: 2.5rem 1rem 1rem 1.5rem;
    }
    .hero img{
        object-position: right;
    }
   
    .row p{
    margin-top: 1rem;
    border-radius: 5px;
    padding: 5px 5px;
    font-size: 14px;
   
    }

    button{
        margin-bottom: 2rem;
    }

    

}

`