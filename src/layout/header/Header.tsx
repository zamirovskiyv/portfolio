import React from 'react';
import {Logo} from "../../components/logo/Logo";
import {Conteiner} from "../../components/Conteiner";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./headerMenu/desktopMenu/DesktopMenu";
import {MobileMenu} from "./headerMenu/mobileMenu/MobileMenu";
import {S} from "./Header_Styles"

const items=['Menu', 'Skills', 'Works', 'Testimony', 'Contact']

export const Header: React.FC = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768

    React.useEffect(() => {
        const handleWindoResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindoResize);

        return () => window.removeEventListener('resize', handleWindoResize);
    }, []);

    console.log('======',breakpoint)

    return (
        <S.Header>
            <Conteiner>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <Logo/>
                    {width < breakpoint ? <MobileMenu menuItems={items}/> : <DesktopMenu menuItems={items}/>}
                </FlexWrapper>
            </Conteiner>
        </S.Header>
    );
};





