import styled from "styled-components";

export const Container = styled.div`
.aboutHome{
    height: auto;

}

.aboutHome #heading{
    text-align: left;
    padding: 0;

}

.aboutHome .left img{
    width: 92%;
    height: 92%;
    object-fit: cover;
    
}

.aboutHome .right{
    padding: 80px 50px;
}

.aboutHome .items{
    margin-top: 50px;
}

.aboutHome .item{
    /* COLOCAR VARIAVEL DE COR */
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200}; 
    border-radius: 5px;
    margin-top: 30px;
    padding: 20px;
    transition: 0.5s;
}

.aboutHome .img{
    width: 200px;
}

.aboutHome img{
    border-radius: 5px;
    width: 70px;
    height: 70px;
    
    
}

.aboutHome .item h2{
    font-size: 20px;
    margin-bottom: 15px;
}

.aboutHome .item:hover{
    background-color: ${({theme}) => theme.COLORS.PINK_400};
    color: ${({theme}) => theme.COLORS.WHITE};
    /* ADICONAR ESSA VARIAVEL DE COR */
    box-shadow: 0 5px 25px -2px rgb(0 0 0 /6%);
    

}

.aboutHome .item {
        gap: 1rem;
    }

@media screen and (max-width: 768px){
    
    .aboutHome .left{
        display: none;
    }

   
.aboutHome .right{
    padding: 80px 20px;
}

    .aboutHome .container{
        flex-direction: column-reverse;
        
    }

 

    .aboutHome .item h2{
    font-size: 18px;
    margin-bottom: 15px;
}


.aboutHome .img{
    width: 200px;
}


}


@media screen and (max-width: 768px){
    .aboutHome .item {
        
    }
}

@media screen and (max-width: 600px){

    .aboutHome .item p{
    font-size: 14px;
    
}

   

    .right{
        margin-top: -3rem;
    }

}




`