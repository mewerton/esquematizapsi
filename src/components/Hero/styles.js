import styled from "styled-components";

export const Container = styled.div`
.hero{
    background-size: cover;
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100vh;
    padding-top: 20%;
    padding-right: 50px;
    color: ${({theme}) => theme.COLORS.PINK_900};

}

.hero img{
    
    background-attachment: fixed;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

        height: 100%;
        width: 100%;
        object-fit: cover;

       /* -webkit-mask-attachment: fixed; */

    
}

.row p{
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_200};
    border-radius: 5px;
    padding: 5px 5px;
}

`