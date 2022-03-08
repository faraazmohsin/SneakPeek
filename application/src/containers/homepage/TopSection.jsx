import React from "react";
import styled from "styled-components";
import {AnimatePresence, motion} from 'framer-motion/dist/framer-motion'
import { Logo } from "../../components/logo";
import { Element, scroller } from "react-scroll";
import { DropArrow } from "../../components/arrow";
import BackgroundImg from "../../assets/pictures/background-shoe-img-3.JPG";

const TopContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    padding: 0;
    background-image: url(${BackgroundImg});
    background-repeat: no-repeat;
`;

const BackgroundFilter = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(55, 55, 55, 0.89);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BackgroundTop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 150px;
`;

const SubText = styled.h1`
    text-align: center;
    font-family: 'Arimo', sans-serif;
    font-size: 28px;
    margin-top: 30px;
    color: white;
    letter-spacing: 1px;
`;

const SubText2 = styled.h1`
    text-align: center;
    font-family: 'Arimo', sans-serif;
    font-size: 28px;
    margin-top: 30px;
    color: black;
    font-style: italic;
    background-color: #45B39D;
    letter-spacing: 1px;
`;

const DownArrowContainer = styled.div`
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
`;

export function TopSection(props) {

    const scrollNext = () => {
        scroller.scrollTo("dateAppSection", { smooth: true, duration: 1450});
    };

    return (
    <Element name="topSection">
    <TopContainer>
        <BackgroundFilter>
        <BackgroundTop>
            <Logo />
        </BackgroundTop>
        <SubText>Sneaker Release Calendar</SubText>
        <SubText2>Never Miss Your Favorite Sneaker Drops</SubText2>
        <DownArrowContainer onClick={scrollNext}>
            <DropArrow />
        </DownArrowContainer>
        </BackgroundFilter>
    </TopContainer>
    </Element>
    );
}