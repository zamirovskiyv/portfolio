import React from 'react';
import styled from "styled-components";
import Icon from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {theme} from "../../styles/Theme";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} align={'center'}>
                <Name>Vitaliy Z.</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'instagram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'telegram'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'vk'}/>
                        </SocialLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialLink>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21px 21px'} iconId={'linkedin'}/>
                        </SocialLink>
                    </SocialItem>
                </SocialList>
                <Copuright>© 2024 Vitaliy Zamirovskiy, All Rights Reserved.</Copuright>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: ${theme.colors.primaryBg};
    padding: 40px 0;
`
const Name = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700; 
    font-size: 22px;
    letter-spacing: 0.14em;

`
const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0;
    
`
const SocialItem = styled.li`

`
const SocialLink = styled.a`
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${theme.colors.accent};
    
    &:hover{
        color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`

const Copuright = styled.small`
    font-weight: 400; 
    font-size: 12px;
    text-align: center;
    //color: rgba(255, 255, 255, 0.5);
    opacity: 0.5;

`