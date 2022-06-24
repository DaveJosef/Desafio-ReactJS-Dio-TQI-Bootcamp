import * as S from './styled'

export const Button = (props) => {
    const { children, onClick } = props;

    return (
        <S.Button onClick={onClick} >
            { children }
        </S.Button>
    );
}
