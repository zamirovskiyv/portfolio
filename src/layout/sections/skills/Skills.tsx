import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Conteiner} from "../../../components/Conteiner";

const Skills = () => {
    return (
        <StyledSkills>
            <Conteiner>
            <SectionTitle>My Skills</SectionTitle>
            <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                <Skill iconId={'html'}
                       title={'HTML'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur dicta dolores\n' +
                           '                eaque eum facilis fugit illum libero minima molestias nostrum perspiciatis reprehenderit voluptate,\n' +
                           '                voluptatem? Adipisci ipsa quis vel!'}/>
                <Skill iconId={'css'}
                       title={'CSS'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur dicta dolores\n' +
                           '                eaque eum facilis fugit illum libero minima molestias nostrum perspiciatis reprehenderit voluptate,\n' +
                           '                voluptatem? Adipisci ipsa quis vel!'}/>
                <Skill iconId={'react'}
                       title={'JS'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur dicta dolores\n' +
                           '                eaque eum facilis fugit illum libero minima molestias nostrum perspiciatis reprehenderit voluptate,\n' +
                           '                voluptatem? Adipisci ipsa quis vel!'}/>

                <Skill iconId={'typesScript'}
                       title={'Types Script'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur dicta dolores\n' +
                           '                eaque eum facilis fugit illum libero minima molestias nostrum perspiciatis reprehenderit voluptate,\n' +
                           '                voluptatem? Adipisci ipsa quis vel!'}/>

                <Skill iconId={'styledComponent'}
                       title={'styled Components'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur dicta dolores\n' +
                           '                eaque eum facilis fugit illum libero minima molestias nostrum perspiciatis reprehenderit voluptate,\n' +
                           '                voluptatem? Adipisci ipsa quis vel!'}/>

                <Skill iconId={'webDesign'}
                       title={'WEB DESIgN'}
                       description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias blanditiis consequuntur dicta dolores\n' +
                           '                eaque eum facilis fugit illum libero minima molestias nostrum perspiciatis reprehenderit voluptate,\n' +
                           '                voluptatem? Adipisci ipsa quis vel!'}/>


            </FlexWrapper>
            </Conteiner>
        </StyledSkills>
    );
};

export default Skills;

const StyledSkills = styled.section`

`