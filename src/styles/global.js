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
    
}

.marigin{
    margin-top: 40.3%;
}

.grid2{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
}

.outline-btn{
    margin: 0;
    box-shadow: none;
    border: 2px solid pink;
    width: 100%;
    transition: 0.5s;
}

.outline-btn:hover{
    background-color: pink;
    color: #fff;

}

.grid3{
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
}

.padding{
    padding: 80px 0;
}

.shadow{
    box-shadow: 0 5px 25px -2px rgba(0 0 0 /6%);
    background-color: #fff;
}


@media screen and (max-width:1061px){
    .grid2{
    grid-template-columns: repeat(2, 1fr);
   
    }
.grid3{
    grid-template-columns: repeat(3, 1fr);
   
    }
    
}

@media screen and (max-width:768px){
    .grid3, .grid{
        grid-template-columns: repeat(2, 1fr);
      
    }
    
}

@media screen and (max-width:723px){
    .grid2{ 
        grid-template-columns: repeat(1, 1fr);
        
    }
    
}

@media screen and (max-width:600px){
    .grid2{
        grid-template-columns: repeat(1, 1fr);
    }
    .grid3{
        gap: 10px;
    }
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

transition: 0.5s;
}


`