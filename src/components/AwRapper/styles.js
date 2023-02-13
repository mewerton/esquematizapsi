import styled from "styled-components";

export const Container = styled.div`
    .awrapper .box{
        padding: 70px 0;
    }

    .awrapper img{
        margin-right: 30px;
    }

    .awrapper h1{
        font-size: 50px;

    }
    .awrapper h3{
        font-size: 20px;
        font-weight: 500;
    }

    @media screen and (max-width: 768px){

        .awrapper{
            height: 20vh;
        }
        .awrapper .box{
        padding: 20px 5px 0px 5px;
        margin-bottom: -1rem;
    }

    .awrapper img{
        margin-right: 5px;
    }

    .awrapper .box img{
        width: 50px;
    }

    .awrapper h1{
        font-size: 10px;

    }
    .awrapper h3{
        font-size: 18px;
        font-weight: 500;
    }
    }

    @media screen and (max-width: 600px){
       
        .awrapper{
            height: 17vh;
        }

        .awrapper h3{
        font-size: 10px;
        margin-left: 0px;
       
    }

    .awrapper .box{
        padding: 20px 5px 0px 5px;
        margin-bottom: -2rem;
    }

    }



`