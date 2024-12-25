import styled from "styled-components";
import {theme} from "../styles/Theme";

export const SectionTitle = styled.h2`
    text-align: center;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 600;
    font-size: 36px;
    letter-spacing: 0.14em;
    margin-bottom: 90px;
    
    position: relative;
    

    &::before{
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        
        position: absolute;
        left: 50%;
        bottom: -30px;
        transform: translate(-50%);
        
    }
`