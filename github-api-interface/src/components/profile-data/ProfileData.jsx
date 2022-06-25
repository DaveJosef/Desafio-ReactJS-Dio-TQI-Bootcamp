import * as S from './styled';
import { useState } from 'react';
import { useEffect } from 'react';

import { ProfileImage } from '../profile-image';
import useGithub from '../../hooks/github-hooks';
import { LoadingWheel } from '../loading-wheel';

export const ProfileData = (props) => {
    const { login, bio, html_url, avatar_url } = props.user;

    const { githubState } = useGithub();
    
    const [ userExists, setUserExists ] = useState(true);

    useEffect(() => {
        if (!props.user) return setUserExists(false);
        if (!props.user.login) return setUserExists(false);
        setUserExists(true);
    }, [props.user]);

    return (
        <>
            { githubState.loading ? (
                <S.ProfileData className='bordered'>
                    <LoadingWheel />
                </S.ProfileData>
            ) : (
                <>
                    { userExists ? (
                        <S.ProfileData className='bordered'>
                            <a href={html_url} ><h6>{ login }</h6></a>
                            <ProfileImage imageUrl={ avatar_url } />
                            <p>{ bio }</p>
                        </S.ProfileData>
                    ) : (
                        <S.ProfileData className='bordered'>
                            <p>No user to show</p>
                        </S.ProfileData>
                    ) }
                </>
            ) }
        </>
    );
}