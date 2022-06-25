import { createGlobalStyle } from 'styled-components';
import { COLORS } from './themes';

export const ResetCSS = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    .App {
        color: ${ COLORS.DARK };
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
        font-weight: bold;
        display: flex;
        flex-flow: column;
        min-height: 100vh;
        background-color: ${ COLORS.LIGHT3 };
        padding-top: 10em;
        text-align: center;
    }

    .Columns {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-evenly;
        height: auto;
        background-color: inherit;
    }

    h6 {
        font-size: .9em;
    }

    a {
        color: ${ COLORS.PRIMARY };
        text-decoration: none;
    }
    
    a:visited {
        color: ${ COLORS.SECONDARY };
    }

    .bordered {
        padding-left: 8px;
        padding-right: 8px;
        border-radius: 8px;
        border: 2px solid ${ COLORS.DARK };
    }
`;
