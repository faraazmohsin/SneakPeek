import React from "react";
import styled from "styled-components";

import SneakPeekLogo from "../../assets/logo/sneakpeek-logo.svg";
import { theme } from "../../theme";

const LogoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LogoImg = styled.img`
    width: 9em;
    height: 9em;
`;

const LogoText = styled.div`
    margin-top: 25px;
    font-size: 50px;
    color: ${theme.primary};
    font-family: 'Leckerli One', cursive;
`

export function Logo (props) {
    return <LogoContainer>
        <LogoImg src={SneakPeekLogo} />
        <LogoText>Sneak Peek</LogoText>
    </LogoContainer>
}