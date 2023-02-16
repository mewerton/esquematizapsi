import styled from "styled-components";

export const Container = styled.div`

.contacts .container{
    border-radius: 10px;
    max-width: 700px;
    margin-top: -2rem;
    
}

.contacts .right {
  padding: 50px;
  
}
.contacts h1 {
  font-size: 30px;
  font-weight: 400;
  text-align: center;
}
.contacts p {
  color: grey;
}
.contacts .items {
  margin: 30px 0;
  
}

.contacts .box .contact{
    display: flex;
    flex-direction: column;
    
    align-items: center;
    
}

.contacts .box{
    display: flex;
    justify-content: space-around;
    
}

.contacts .box p {
  font-size: 17px;
  margin-top: 10px;
}

.contacts .right .text-title {
  font-size: 17px;
  margin-bottom: 1rem;
 
}

.contacts textarea,
.contacts input {
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  outline: none;
  border: 1px solid grey;
  border-radius: 5px;
}
form .flexSB input:nth-child(1) {
  margin-right: 10px;
}
.contacts h3 {
  margin-top: 20px;
  font-weight: 500;
  margin-bottom: 10px;
}
.contacts span {
  color: #1eb2a6;
  font-weight: 600;
  font-size: 15px;
  word-spacing: 5px;
}

.primary-btn:hover{
    background-color: pink;
    color: #5f1a2c;
}

@media screen and (max-width: 768px) {
  .contacts .container {
    flex-direction: column;
    margin: 1rem;
    
  }
  .contacts iframe {
    height: 50vh;
  }
  .contacts .row {
    width: 100%;
  }
}

@media screen and (max-width: 600px){

    .contacts .container{
        margin: 1rem;
        margin-top: -2rem;
    }

    .contacts .box{
    display: flex;
    justify-content: space-between;
    }
    .contacts h1 {
     font-size: 20px;
 
}
  

}

`