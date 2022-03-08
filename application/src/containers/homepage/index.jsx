import React from "react";
import { TopSection } from "./TopSection";
import styled from "styled-components";
import { DateAppSection } from "../../containers/dateApp";
import { MoreAboutSneakPeek } from "./more";
import { Footer } from "../../components/footer";

const HomeContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export function Homepage(props) {
    return (
    <HomeContainer>
        <TopSection />
        <DateAppSection />
        <MoreAboutSneakPeek />
        <Footer />
    </HomeContainer>
    );
}