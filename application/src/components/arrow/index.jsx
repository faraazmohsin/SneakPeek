import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import React from "react";
import { theme } from "../../theme";

const ArrowContainer = styled.div`
    width: 46px;
    height 46px;
    border-radius: 50%;
    background-color: rgba(113, 113, 113, 0.48);
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid transparent;
    transition: all 250ms ease-in-out;
    cursor: pointer;

    &:hover {
        border: 2px solid ${theme.primary};
    }
`;

const ArrowIcon = styled.div`
    margin-top: 2px;
    color: white;
    font-size: 28px;
`;

export function DropArrow() {
    return <ArrowContainer>
        <ArrowIcon>
            <FontAwesomeIcon icon={faAngleDown} />
        </ArrowIcon>
    </ArrowContainer>

}