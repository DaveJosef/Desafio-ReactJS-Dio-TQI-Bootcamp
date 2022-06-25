import * as S from './styled';

export const RepoCard = (props) => {
    const { name, description, html_url } = props.repo;

    return (
        <S.RepoCard className='bordered' >
            <a href={html_url} ><h6>{ name.length > 12 ? name.slice(0, 12) + '...' : name }</h6></a>
            <p>{ description ? description : 'No description provided' }</p>
        </S.RepoCard>
    );
}