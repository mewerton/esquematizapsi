import styled from "styled-components";

export const Container = styled.div`
    
    
    
    .online{
        text-align: center;
    }

    .online .box{
        box-shadow: 0 5px 25px -2px rgba(0 0 0 /6%);
        background-color: #fff;
        padding: 30px 20px;
        transition: 0.5s;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
    }

    .online .img{
        width: 80px;
        height: 80px;
        margin: 0;
        position: relative;
    }

    .online img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .online .box h1{
        font-weight: 500;
        font-size: 14px;
        margin: 10px 0;
        line-height: 25px;
        text-align: start;
    }

    .author p{
        display: flex;
        flex-direction: row;
        
        font-size: 14px;
        font-weight: 500;
        color: gray;
        text-align: start;
        margin-bottom: 1rem;
    }

    .box{
        height: 300px;
        
    }

    .online span{
        background-color: #f8f8f8;
        padding: 5px 20px;
        font-weight: 500;
        font-size: 15px;
        color: pink;
        border-radius: 5px;

    }

    .online .box .show{
        opacity: 0;
    }

    .online .box:hover{
        background-color: pink;
        border-radius: 5px;
        cursor: pointer;
    }

    .online .box:hover .show{
        opacity: 1;
        position: absolute;
        top: 0;
        left: 0;
    }

    .online .box:hover h1{
        color: #fff;
    }

    @media screen and (max-width:600px){

        max-width: 95%;
        margin: auto;
    }

`