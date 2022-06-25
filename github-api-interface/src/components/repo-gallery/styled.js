import styled from "styled-components";
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import { COLORS } from "../../global/themes";

export const StyledTab = styled(Tab)`

    background-color: ${ COLORS.LIGHT2 };
    min-height: 2em;
    max-width: 300px;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: center;

    &.is-selected {
        background-color: inherit;
        border-bottom: none;
    }
    
    &.bordered {
        border-radius: 8px 8px 0 0;
        border: 2px solid ${ COLORS.DARK };
    }
`;

export const StyledTabList = styled(TabList)`
    list-style: none;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
`;

export const StyledTabs = styled(Tabs)`

    display: flex;
    flex-flow: column wrap;
    align-items: center;
`;

export const StyledTabPanel = styled(TabPanel)`

`;

export const RepoGallery = styled.div`

    @media (max-width: 606px) {
        padding-top: 5em;
    }
`;
