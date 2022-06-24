import { RepoList } from '../repo-list';
import * as S from './styled';

export const RepoGallery = (props) => {
    const { repoList, starredList } = props;

    return (
        <S.RepoGallery>
            <S.StyledTabs>
                <S.StyledTabList>
                    <S.StyledTab>User Repositories</S.StyledTab>
                    <S.StyledTab>Starred Repositories</S.StyledTab>
                </S.StyledTabList>

                <S.StyledTabPanel>
                    <RepoList repoList={ repoList } />
                </S.StyledTabPanel>
                <S.StyledTabPanel>
                    <RepoList repoList={ starredList } />
                </S.StyledTabPanel>
            </S.StyledTabs>
        </S.RepoGallery>
    );
};
