import {createGlobalStyle} from "styled-components"

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto', sans-serif;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_COLOR_500};
}

input, body, button, textarea{
    font-family: 'Roboto', sans-serif;
    
    outline: none;
}

a{
    text-decoration: none;
}
li{
    list-style-type: none;
}

button, a{
    cursor: pointer;
    transition: 0.2s ease-in-out;
}

button{
    border: none;
}


.container{
    max-width: 85%;
    margin: auto;
}

.flexSB{
    display: flex;
    justify-content: space-between;
}

.icon {
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 50%;
    text-align: center;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    color:  ${({theme}) => theme.COLORS.BLUE_300};
    transition: 0.5s ease-in-out;
}

.icon:hover{
    cursor: pointer;
    background-color: ${({theme}) => theme.COLORS.BLUE_300};
    color:  ${({theme}) => theme.COLORS.WHITE};

}


`