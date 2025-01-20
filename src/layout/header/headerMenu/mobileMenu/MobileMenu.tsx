import React from 'react';
import {S} from './../HeaderMenu_Styles'
import {Menu} from "../menu/Menu";

const isMobile = false;

export const MobileMenu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={isMobile}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={isMobile}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};

