import React from "react";
import { SectionTitle } from "../components/sectionTitle";
import styled from "styled-components";
import { Element } from "react-scroll";
import { DateCards } from "../containers/dateCards";

const DateAppContainer = styled(Element)`
    width: 100%;
    min-height: 990px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Arimo', sans-serif;
    padding: 10px 0;
`;

export function DateAppSection(props) {
    return (
        <DateAppContainer name="dateAppSection">
        <SectionTitle>Upcoming Drops</SectionTitle>
        <DateCards/>
    </DateAppContainer>
    );

}