import styled from "styled-components";

export const Container = styled.div`
  
    .team{
        margin-top: -4rem;
    }
    .team .items {
        transition: 0.5s;
        border-radius: 10px;
    }

    .team .img {
        position: relative;
    }

    .team img {
        width: 100%;
        height: 100%;
        border-radius: 10px 10px 0px 0px;
    }
    .overlay {
        position: absolute;
        bottom: 0;
        z-index: 11;
        display: flex;
        flex-direction: column;
        padding: 20px;
        opacity: 0;
        transition: 0.5s;
        
    }

    .overlay i {
        background-color: #000;
        color: #fff;
        margin: 5px;
        transition: 0.5s;
        }
    .team .details {
        padding: 30px;
        text-align: center;
        
    }

    .team .details h2 {
        font-weight: 500;
        font-size: 20px;
        transition: 0.5s;
        }

    .team .details p {
        font-size: 15px;
        color: grey;
        margin-top: 10px;
        transition: 0.5s;
        }

    .team .items:hover {
        background-color: pink;
        color: #fff;
        cursor: pointer;
        }

    .team .items:hover p {
        color: #fff;
    }

    .team .items:hover .overlay {
        opacity: 1;
    }

    .team .items:hover .overlay i:hover {
        background-color: pink;
        color: #fff;
    }

`