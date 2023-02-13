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
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_WHITE};
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
    padding: 17px 30px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    color: ${({theme}) => theme.COLORS.PINK_400};
    font-weight: 600;
    margin: 30px 10px 0 0;
    border-radius: 3px;
    box-shadow: 0 24px 36px -11px ${({theme}) => theme.COLORS.BACKGROUND_700};

}

button i {
    margin-left: 20px;

}

button:hover{
    box-shadow: none;
}

.primary-btn{
    background-color: ${({theme}) => theme.COLORS.PINK_400};
    color: ${({theme}) => theme.COLORS.WHITE};

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

.grid{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;

}

.flex{
    display: flex;
    align-items: center;
}

.marigin{
    margin-top: 40.3%;
}

@media screen and (max-width:768px){

    .grid{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;

}

}

@media screen and (max-width:600px){
    
    .container{
    max-width: 100%;
    }
    
button{
    border: none;
    padding: 12px 12px;
    
    font-weight: 600;
    margin: 15px 5px 0 0;
    border-radius: 3px;
    margin-left: 5px;
    

}



button i {
    margin-left: 5px;

}

button:hover{
    box-shadow: none;
}
}


`