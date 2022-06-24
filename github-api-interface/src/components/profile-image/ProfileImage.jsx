import * as S from './styled';

export const ProfileImage = (props) => {
    const { imageUrl } = props;

    return (
        <S.ProfileImage src={ imageUrl } alt='User' />
    );
}
