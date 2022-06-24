import * as S from './styled';

import { ProfileImage } from '../profile-image';

export const ProfileData = (props) => {
    const { login, bio, html_url, avatar_url } = props.user;
    const userExists = true;

    return (
        <>
            { userExists ? (
                <S.ProfileData>
                    <a href={html_url} ><h6>{ login }</h6></a>
                    <ProfileImage imageUrl={ avatar_url } />
                    <p>{ bio }</p>
                </S.ProfileData>
            ) : (
                <S.ProfileData>
                    <p>No user to show</p>
                </S.ProfileData>
            ) }
        </>
    );
}