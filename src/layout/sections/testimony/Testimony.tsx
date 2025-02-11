import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import Icon from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {IconWrapper} from "../skills/skill/Skill";
import {Conteiner} from "../../../components/Conteiner";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Conteiner>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <IconWrapper>
                        <Icon iconId={'quote'}/>
                    </IconWrapper>

                    <Slider></Slider>
                </FlexWrapper>
            </Conteiner>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: beige;
    
    ${IconWrapper}{
        margin: 28px 0 72px;
    }
`