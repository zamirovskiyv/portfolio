import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, fontMax: 36, fontMin: 30})};
    text-align: center;
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
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
        
    }
`