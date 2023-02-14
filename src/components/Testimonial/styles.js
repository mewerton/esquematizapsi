import styled from "styled-components";

export const Container = styled.div`
.testimonial .items{
    padding: 30px;
    transition: 0.5s;
}

.testimonial .img{
    position: relative;
}

.testimonial img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
}

.testimonial i {
    position: absolute;
    bottom: 0;
    left: 60px;
    background-color: #5f1a2c;
    color: #fff;
    transition: 0.5s;
}


.testimonial .name{
    margin: 25px;
    
}

.testimonial .name h2{
    font-size: 20px;
    margin-bottom: 5px;
}

.testimonial .name span{
    color: #5f1a2c;
    transition: 0.5s;
}

.testimonial p{
    margin-top: 20px;
    color: grey;
    transition: 0.5s;
}

.testimonial .items:hover{
    background-color: #5f1a2c;
    color: #fff;
    
}
.testimonial .items:hover p,
.testimonial .items:hover span{
    color: #fff;
}

.testimonial .items:hover i{
    background-color: #fff;
    color: #5f1a2c;
}
@media screen and (max-width: 600px){
    margin: 1rem;
}

`