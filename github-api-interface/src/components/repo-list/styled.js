import styled from 'styled-components';

export const RepoList = styled.div`
    background-color: inherit;
    margin-bottom: 5em;
    padding-top: .9rem;
    min-height: 200px;
    max-height: inherit;
    min-width: 400px;
    max-width: 400px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    
    @media (max-width: 400px) {
        
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
    
`;
