import styled from "styled-components";
import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';

export const StyledTab = styled(Tab)`

    border-radius: 10px 10px 0 0;
    background-color: #4f4f4f;

    &.is-selected {
        background-color: red;
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

`;
