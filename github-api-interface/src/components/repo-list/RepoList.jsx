import * as S from './styled';
import { RepoCard } from '../repo-card';
import { useState } from 'react';
import { useEffect } from 'react';

export const RepoList = (props) => {
    const { repoList } = props;

    const [ areThereRepos, setAreThereRepos ] = useState(true);

    useEffect(() => {
        setAreThereRepos(true);
    }, []);

    const repoListMap = (repo) => {
        const { id } = repo;
        
        return (
            <RepoCard key={`repo-${id}`} repo={repo} />
        )
    }

    return (
        <>
            { areThereRepos ? (
                <S.RepoList>
                    { repoList.map( repoListMap ) }
                </S.RepoList>
            ) : (
                <S.RepoList>
                    No repos to show
                </S.RepoList>
            ) }
        </>
    );
}
