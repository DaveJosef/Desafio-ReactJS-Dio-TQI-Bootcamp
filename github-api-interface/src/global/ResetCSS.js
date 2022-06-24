import { createGlobalStyle } from 'styled-components';
import { COLORS } from './themes';

export const ResetCSS = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
    }

    .App {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 20px;
        font-weight: normal;
        display: flex;
        flex-flow: column;
        justify-content: center;
        min-height: 100vh;
        background-color: #3e3e3e;
        text-align: center;
    }

    .Columns {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        background-color: #2e2e2e;
    }

    a {
        color: ${ COLORS.SECONDARY };
        text-decoration: none;
        font-size: .9em;
    }
    
    a:visited {
        color: ${ COLORS.PRIMARY };
    }
`;
