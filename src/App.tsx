import './App.css';
import styled from 'styled-components';
import {Header} from "./layout/header/Header";
import {Logo} from "./components/logo/Logo";
import React from "react";
import {Menu} from "./components/menu/Menu";
import Main from "./layout/sections/main/Main";
import Skills from "./layout/sections/skills/Skills";
import Works from "./layout/sections/works/Works";
import {Testimony} from "./layout/sections/testimony/Testimony";
import {Contacts} from "./layout/sections/contacts/Contacts";
import {Slogan} from "./layout/sections/slogan/Slogan";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <Testimony/>
            <Contacts/>
            <Slogan></Slogan>
            <Footer/>
        </div>
    );
}

export default App;

