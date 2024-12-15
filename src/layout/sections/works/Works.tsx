import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/socialNetwork.webp'
import newYorkImg from '../../../assets/images/newYork.webp'

const worksItems = ['All', 'landing page', 'React', 'SPA']
const socialNetworkText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
const newYorkText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'

export const Works = () => {
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksItems}/>
            <FlexWrapper justify={'space-around'}>
                <Work title={'Social Network'} text={socialNetworkText} src={socialImg}/>
                <Work title={'Timer'} text={newYorkText} src={newYorkImg}/>

            </FlexWrapper>

        </StyledWorks>
    );
};

export default Works;

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: #8e8ee1;
`