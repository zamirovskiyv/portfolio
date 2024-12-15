import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/myPhoto.jpg";
import {FlexWrapper} from "../../../components/FlexWrapper";


const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper align={'center'} justify={'space-around'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Vitali Zamirovskiy</Name>
                    <MainTitle>A Frontend Developer.</MainTitle>
                </div>
                <Photo src={photo} alt=""/>
            </FlexWrapper>
        </StyledMain>
    );
};

export default Main;

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: rgb(232, 234, 234);
`

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`

const MainTitle = styled.h1`

`

const Name = styled.h2`

`