import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from '../../../assets/images/socialNetwork.webp'
import newYorkImg from '../../../assets/images/newYork.webp'
import {Conteiner} from "../../../components/Conteiner";

const worksItems = ['All', 'landing page', 'React', 'SPA']
const socialNetworkText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
const newYorkText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'

export const Works = () => {
    return (
        <StyledWorks>
            <Conteiner>
            <SectionTitle>My Works</SectionTitle>
            <TabMenu menuItems={worksItems}/>
            <FlexWrapper justify={'space-between'} align={'flex-start'}>
                <Work title={'Social Network'} text={socialNetworkText} src={socialImg}/>
                <Work title={'Timer'} text={newYorkText} src={newYorkImg}/>

            </FlexWrapper>
            </Conteiner>
        </StyledWorks>
    );
};

export default Works;

const StyledWorks = styled.section`

`