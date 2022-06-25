import styled from 'styled-components';
import { COLORS } from '../../global/themes';

export const Button = styled.button`
    color: ${ COLORS.LIGHT3 };
    font-size: inherit;
    background-color: ${ COLORS.RED_LIGHT };
    margin-bottom: .9rem;
    min-height: 50px;
    min-width: 100px;
    border-radius: 8px;
    
    @media (max-width: 400px) {
        
        min-width: 300px;
    }
    
    &.bordered {
        border: 2px solid ${ COLORS.RED_DARK };
    }
`;
