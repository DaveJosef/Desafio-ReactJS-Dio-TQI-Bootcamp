import styled from 'styled-components';
import { COLORS } from '../../global/themes';

export const ProfileData = styled.div`
    background-color: inherit;
    min-width: 200px;
    max-width: 200px;
    min-height: 200px;
    max-height: 200px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 2em;
    
    a {
        color: ${ COLORS.RED_LIGHT };
        text-decoration: none;
    }
    
    a:visited {
        color: ${ COLORS.RED_DARK };
    }

`;
