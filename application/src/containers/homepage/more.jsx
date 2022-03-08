import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
import { SectionTitle } from "../../components/sectionTitle";
import AboutImgUrl from "../../assets/pictures/MoreImages/background_shoe.svg";
import {

    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography
} from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const MoreAboutContainer = styled(Element)`
    min-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arimo', sans-serif;
    margin-top: 200px;
    text-align: center;
`;

const AboutImg = styled.img`
    width: 330px;
    height: 160px;
    margin-bottom: 60px;
`;

const heading = "About Sneak Peek";
const line1 = "Sneak Peek is an online destination to discover upcoming Sneakers from";
const line2 = "the best fashion brands, stores, and boutiques around the world. At Sneak";
const line3 = "Peek we offer viewing and saving dates for your favorite sneaker releases!";
const line4 = "Our aim is to create a place for customers to discover their favorite sneakers. The vision";
const line5 = "that embodies Sneak Peek is to provide our customers with the best experience and to";
const line6 = "build a strong platform in the mobile application market.";

export function MoreAboutSneakPeek(props) {
    return <MoreAboutContainer>
            <MuiThemeProvider theme={theme}>
                <Typography style={{ fontWeight: "bold", fontFamily: 'Arimo', fontSize: '40px', marginBottom: '30px' }} variant="h3" gutterBottom>
                    {heading}
                </Typography>

                <Typography style={{ fontFamily: 'Arimo' }} variant="h6" gutterBottom>
                    {line1}
                </Typography>

                <Typography style={{ fontFamily: 'Arimo' }} variant="h6" gutterBottom>
                    {line2}
                </Typography>

                <Typography style={{ fontFamily: 'Arimo', paddingBottom: '50px' }} variant="h6" gutterBottom>
                    {line3}
                </Typography>

                <Typography style={{ fontFamily: 'Arimo' }} variant="h6" gutterBottom>
                    {line4}
                </Typography>

                <Typography style={{ fontFamily: 'Arimo' }} variant="h6" gutterBottom>
                    {line5}
                </Typography>

                <Typography style={{ fontFamily: 'Arimo', paddingBottom: '80px' }} variant="h6" gutterBottom>
                    {line6}
                </Typography>
                <AboutImg src={AboutImgUrl} />
            </MuiThemeProvider>
    </MoreAboutContainer>
}