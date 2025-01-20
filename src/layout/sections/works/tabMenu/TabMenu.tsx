import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";


export const TabMenu = (props: { menuItems: Array<string> }) => {
    return (
        <StyleTabMenu>
            <ul>
                {props.menuItems.map((item: string, index) => {
                    return <ListItem key={index}>
                        <Link href="">{item}</Link>
                    </ListItem>
                })}
            </ul>
        </StyleTabMenu>
    );
};


const StyleTabMenu = styled.nav`
    //margin-bottom: 40px;
    ul {
        display: flex;
        max-width: 352px;
        width: 100%;
        justify-content: space-between;
        margin: 0 auto 40px;
        border: 1px solid red;
    }
`

const ListItem = styled.li`
    
`

