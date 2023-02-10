import styled from "styled-components";

export const Container = styled.div`
height: 100vh;

.pageA{
    margin-bottom: 4rem;
}

.image-back img{
    
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
        max-height:550px;
        height: 80%;
        width: 100%;
        object-fit: cover;
        object-position: center;
        

      
}

.title-page{
    margin: 8rem 2rem 0 2rem;
}

.title-page .subtitle{
    color: white;
}

@media screen and (max-width: 600px){

    .image-back img{
    
        max-height:670px;

    }

    .pageA{
    margin-bottom: -2rem;
}

}

`