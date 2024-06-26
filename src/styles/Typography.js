import styled from "styled-components";
import { getTheme } from "./ThemeUtils";

export const TypeH1 = styled.h1`
    font-size: 64px;
    line-height: 72px;
    font-weight: 700;
    font-family: ${getTheme('primaryFont')};
    margin: 0 0 24px;
    @media only screen and (max-width: 1024px) {
        font-size: 48px;
        line-height: 48px;
        margin: 0 0 10px;
    }
`

export const TypeH2 = styled.h2`
    font-size: 48px;
    line-height: 56px;
    font-weight: 700;
    font-family: ${getTheme('primaryFont')};
    margin: 0 0 24px;
    @media only screen and (max-width: 1024px) {
        font-size: 36px;
        line-height: 36px;
        margin: 0 0 14px;
    }
`

export const TypeH3 = styled.h3`
    font-size: 36px;
    line-height: 42px;
    font-weight: 400;
    font-family: ${getTheme('primaryFont')};
    margin: 0 0 16px;
    @media only screen and (max-width: 1024px) {
        font-size: 32px;
        line-height: 32px;
        margin: 0 0 14px;
    }
`

export const TypeText = styled.p`
    font-size: 18px;
    line-height: 26px;
    font-weight: 400;
    font-family: ${getTheme('primaryFont')};
    margin: 0 0 16px;
    @media only screen and (max-width: 1024px) {
        font-size: 16px;
        line-height: 24px;
    }
`