import { Tab, TabList, Tabs, TabPanel } from 'react-tabs';
import { RepoList } from '../repo-list';
import * as S from './styled';

export const RepoGallery = (props) => {
    const { repoList, starredList } = props;

    return (
        <S.RepoGallery>
            <Tabs>
                <TabList>
                    <Tab>User Repositories</Tab>
                    <Tab>Starred Repositories</Tab>
                </TabList>

                <TabPanel>
                    <RepoList repoList={ repoList } />
                </TabPanel>
                <TabPanel>
                    <RepoList repoList={ starredList } />
                </TabPanel>
            </Tabs>
        </S.RepoGallery>
    );
};
