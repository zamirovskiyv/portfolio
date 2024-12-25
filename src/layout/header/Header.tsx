import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Conteiner} from "../../components/Conteiner";
import {FlexWrapper} from "../../components/FlexWrapper";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const items=['Menu', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header = () => {
    return (
        <StyledHeader>
            <Conteiner>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    <HeaderMenu menuItems={items}/>
                </FlexWrapper>
            </Conteiner>
        </StyledHeader>
    );
};


const StyledHeader = styled.header`
    background: rgba(31, 31, 32, 0.9);
    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99999;
    
`




