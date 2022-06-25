import { useEffect } from 'react';
import useGithub from '../../hooks/github-hooks';
import { RepoList } from '../repo-list';
import * as S from './styled';

export const RepoGallery = () => {
    const { githubState, getUserRepos, getUserStarred } = useGithub();

    useEffect(() => {
        if (githubState.user.login) {
            getUserRepos(githubState.user.login);
            getUserStarred(githubState.user.login);
        }
    }, [githubState.user.login]);

    return (
        <S.RepoGallery>
            <S.StyledTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected' >
                <S.StyledTabList>
                    <S.StyledTab className='bordered' >User Repositories</S.StyledTab>
                    <S.StyledTab className='bordered' >Starred Repositories</S.StyledTab>
                </S.StyledTabList>

                <S.StyledTabPanel>
                    <RepoList repoList={ githubState.repos } />
                </S.StyledTabPanel>
                <S.StyledTabPanel>
                    <RepoList repoList={ githubState.starred } />
                </S.StyledTabPanel>
            </S.StyledTabs>
        </S.RepoGallery>
    );
};
