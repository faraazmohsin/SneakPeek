import React from  "react";
import styled from "styled-components";
import SneakPeekLogo from "../../assets/logo/sneakpeek-logo.svg";
import { theme } from "../../theme";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #1f1f1f
`;

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 80px;
`;

const LogoImg = styled.img`
    width: 5em;
    height: 5em;
`;

const LogoText = styled.div`
    margin-top: 18px;
    margin-bottom: 55px;
    font-size: 30px;
    color: ${theme.primary};
    font-family: 'Leckerli One', cursive;
`;

const InfoContainer = styled.div`
    width: 50%;
    display: flex;
    border-top: 1px solid #cdcdcd;
    padding-top: 50px;
    color: #fff;
    justify-content: center;
    align-items: center;
`;

const HomeTextContainer = styled.div`
    display: flex;
    font-family: 'Arimo', sans-serif;
`;

const SocialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SocialIcon = styled.div`
    color: #fff;
    font-size: 30px;
    transition: all 200ms ease-in-out;

    &:not(:last-of-type) {
        margin-right: 30px;
    }

    &:hover {
        color: #adadad;
    }
`;

export function Footer(props) {
    return <FooterContainer>
            <LogoContainer>
                <LogoImg src={SneakPeekLogo} />
                <LogoText>Sneak Peek</LogoText>
            </LogoContainer>
            <InfoContainer>
                    <HomeTextContainer>
                    </HomeTextContainer>
                    <SocialContainer>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faTwitter} />
                    </SocialIcon>
                    <SocialIcon>
                        <FontAwesomeIcon icon={faInstagram} />
                    </SocialIcon>
                </SocialContainer>
            </InfoContainer>
    </FooterContainer>
}