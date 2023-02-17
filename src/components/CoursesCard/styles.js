import styled from "styled-components";

export const Container = styled.div`

.coursesCard{
    padding: 50px 0;
    
}

.coursesCard .items{
    background-color: #fff;
    padding: 30px;
    text-align: center;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}

.coursesCard .items .left{
    
}

.coursesCard .img{
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: pink;
    padding: 15px;
}

.coursesCard img{
    width: 100%;
    height: 100%;
    object-fit: cover;

}

.coursesCard .text{
    margin-left: 15px;
    text-align: left;

}

.coursesCard .text h1{
    font-size: 20px;
    font-weight: 500;
    line-height: 35px;
}


.coursesCard .rate{
    margin: 20px 0;
    color: pink;

}

.coursesCard .rate i{
    font-size: 13px;
    margin-right: 5px;
}

.coursesCard .details .dimg img{
    width: 50px;
    height: 50px;
    border-radius: 50% ;
    margin-top: 20px;
}

.coursesCard .details .box{
    display: flex;
    align-items: center;
    color: grey;
    gap: 1rem;
    margin-bottom: 1rem;
    

}

.coursesCard .details span{
    color: pink;
    font-weight: 500;
    font-size: 14px;
    
}

.coursesCard .price{
    margin: 30px 0;
    background-color: #f8f8f8;
    padding: 10px;
    
}

.coursesCard h3{
    font-weight: 500;
    color: pink;
}

@media screen and (max-width:600px){
    margin: 1rem;
    
    .coursesCard .text h1{
    font-size: 20px;
   
    line-height: 25px;
}

.coursesCard .items{
    background-color: #fff;
    padding: 30px;
    text-align: center;
    border-radius: 5px;
    
}

}



`