import styled from 'styled-components';

export const SearchBar = styled.div`
    top: 0;
    position: fixed;
    font-size: .9em;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    min-height: 50px;
    width: 100%;
    max-height: 100px;
    background-color: #1e1e1e;
    padding-top: .9rem;

    input {
        min-height: 50px;
        min-width: 300px;
        font-size: inherit;
        border-radius: 8px;
        border: none;
    }
`;
