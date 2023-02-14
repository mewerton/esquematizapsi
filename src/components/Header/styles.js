import styled from "styled-components";

export const Container = styled.div`
header{

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_100};
    margin: 0 30px;
}

header ul{
    padding: 30px 20px;
}

header li{
    margin-right: 40px;
}

header ul li a{
    color: ${({theme}) => theme.COLORS.PINK_400};
    font-weight: 500;
    transition: 0.5s;

}

header ul li a:hover{
    color: ${({theme}) => theme.COLORS.YELLOW_900};
}

.start{
    background-color: ${({theme}) => theme.COLORS.BLUE_300};
    padding: 30px 70px;
    color: ${({theme}) => theme.COLORS.WHITE};
    clip-path: polygon(10% 0, 100% 0, 100% 100%, 0 100%);

}
.toggle{
    display: none;
}

@media screen and (max-width: 920px){
    .start{
        clip-path: none;

    }
    header{
        margin: 0;
        background-color: ${({theme}) => theme.COLORS.BLUE_300};
        position: relative;
    }

    header ul.flexSB{
        display: none;

    }

    header ul li{
        margin-bottom: 20px;
    }

    .toggle{
        display: block;
        background: none;
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 30px;
        position: absolute;
        right: 50px;
        top: -25px;
       
    }

    .mobile-nav{
        position: absolute;
        top: 7vh;
        left: 0;
        width: 100%;
        background-color: ${({theme}) => theme.COLORS.BLUE_300};
       
    }

    header ul li a{
    color: ${({theme}) => theme.COLORS.WHITE};
    }
}

@media screen and (max-width: 600px){

    .toggle{
        
        top: -5px;
    }

}

`