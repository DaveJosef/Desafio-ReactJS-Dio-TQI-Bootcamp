import * as S from './styled';
import { RepoCard } from '../repo-card';
import { useState } from 'react';
import { useEffect } from 'react';

import useGithub from '../../hooks/github-hooks';
import { LoadingWheel } from '../loading-wheel';

export const RepoList = (props) => {
    const { repoList } = props;

    const { githubState } = useGithub();
    
    const [ areThereRepos, setAreThereRepos ] = useState(true);

    useEffect(() => {
        if (!repoList) return setAreThereRepos(false);
        if (!repoList.length) return setAreThereRepos(false);
        setAreThereRepos(true);
    }, [repoList]);

    const repoListMap = (repo) => {
        const { id } = repo;
        
        return (
            <RepoCard key={`repo-${id}`} repo={repo} />
        )
    }

    return (
        <>
            { githubState.loading ? (
                <S.RepoList className='bordered'>
                    <LoadingWheel />
                </S.RepoList>
            ) : (
                <>
                    { areThereRepos ? (
                        <S.RepoList className='bordered'>
                            { repoList.map((repo) => repoListMap(repo)) }
                        </S.RepoList>
                    ) : (
                        <S.RepoList className='bordered'>
                            No repos to show
                        </S.RepoList>
                    ) }
                </>
            ) }
        </>
    );
}
