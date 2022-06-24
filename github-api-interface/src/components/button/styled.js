import styled from 'styled-components';
import { COLORS } from '../../global/themes';

export const Button = styled.button`
    font-size: inherit;
    background-color: ${ COLORS.PRIMARY };
    border: none;
    min-height: 50px;
    min-width: 100px;
    border-radius: 8px;
`;
