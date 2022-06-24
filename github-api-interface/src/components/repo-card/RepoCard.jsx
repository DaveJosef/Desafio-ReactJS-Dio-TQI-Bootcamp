import * as S from './styled';

export const RepoCard = (props) => {
    const { name, description, html_url } = props.repo;

    return (
        <S.RepoCard>
            <a href={html_url} ><h6>{ name }</h6></a>
            <p>{ description }</p>
        </S.RepoCard>
    );
}