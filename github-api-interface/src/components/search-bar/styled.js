import styled from 'styled-components';
import { COLORS } from '../../global/themes';

export const SearchBar = styled.form`
    top: 0;
    position: fixed;
    font-size: .9em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-height: 50px;
    width: 100%;
    background-color: inherit;
    padding-top: .9rem;
    border-bottom: 1px solid ${ COLORS.DARK };

    input {
        min-height: 50px;
        min-width: 300px;
        font-size: inherit;
        border-radius: 8px;
        border: inherit;
        color: inherit;
        margin-bottom: .9rem;
    }
`;
