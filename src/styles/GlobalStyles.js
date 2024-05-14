import { createGlobalStyle } from "styled-components"
import { getTheme } from "./ThemeUtils"

export const GlobalStyles = createGlobalStyle`
    /* START RESET CSS

    http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain) */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    /* END RESET CSS */

    /* START FONTS */
    @font-face {
        font-family: 'Courier';
        font-weight: 400;
        font-style: normal;
        src: url('./fonts/CourierPrime-Regular.woff2') format('woff2'),
             url('./fonts/CourierPrime-Regular.woff') format('woff');
    }
    @font-face {
        font-family: 'Courier';
        font-weight: 400;
        font-style: italic;
        src: url('./fonts/CourierPrime-Italic.woff2') format('woff2'),
             url('./fonts/CourierPrime-Italic.woff') format('woff');
    }
    @font-face {
        font-family: 'Courier';
        font-weight: 700;
        font-style: normal;
        src: url('./fonts/CourierPrime-Bold.woff2') format('woff2'),
             url('./fonts/CourierPrime-Bold.woff') format('woff');
    }
    @font-face {
        font-family: 'Courier';
        font-weight: 700;
        font-style: italic;
        src: url('./fonts/CourierPrime-BoldItalic.woff2') format('woff2'),
             url('./fonts/CourierPrime-BoldItalic.woff') format('woff');
    }
    /* END FONTS */

    /* START GLOBAL CSS */
    * {
        box-sizing: border-box;
    }
    body {
        color: ${getTheme('textColor')};
        background-color: ${getTheme('primaryColor')}
    }
    b, strong {
        font-weight: 700;
    }
    /* END GLOBAL CSS */
`