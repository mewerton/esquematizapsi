import styled from "styled-components";

export const Container = styled.div`


footer {
  background-color:  ${({theme}) => theme.COLORS.BACKGROUND_800};
}
footer .container {
    display: flex;
    justify-content: space-between;
}
footer .logo{
    max-width: 250px;
}
footer .list{
    display: flex;
    gap: 2rem;
}
footer .logo span {
    color: pink;
    font-size: 14px;
}
footer .logo p {
    color: grey;
    margin: 30px 0 15px 0;
}
footer .logo .icon {
    background-color: pink;
    color: white;
    margin-right: 10px;
}
footer h3 {
    margin-bottom: 40px;
    font-weight: 500;
}
footer ul li {
    margin-bottom: 20px;
}
footer .link li::before {
    content: "⟶";
    color: pink;
    margin-right: 5px;
}
footer .items {
    margin-bottom: 30px;
}
footer .items img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
    object-fit: cover;
}
footer .items span,
footer .items i {
    font-size: 12px;
    color: #1eb2a6;
    margin-right: 5px;
    text-transform: capitalize;
}
footer h4 {
    font-weight: 400;
    margin-top: 5px;
}

footer .last{
    margin-top: 0rem;
}

footer .last ul li {
    display: flex;
    margin-bottom: 20px;
    color: gray;
    
}
footer a{
    color: gray;
}
footer a:hover{
    color:  ${({theme}) => theme.COLORS. PINK_900};
}

footer .last i {
    width: 30px;
    font-size: 20px;
    color: pink;
}
.legal {
    text-align: center;
    padding: 10px 0;
    color: grey;
    background-color: #e9e9e9;
}
.legal p {
    font-size: 12px;
}

@media screen and (max-width: 855px){
    footer .link{
        display: none;
    }
}

@media screen and (max-width: 600px) {
  
    footer .container {
        margin: 0 1rem 0 3rem;
        flex-direction: column;
    }

    footer .last{
        margin-top: 2rem;
    }

    }

`