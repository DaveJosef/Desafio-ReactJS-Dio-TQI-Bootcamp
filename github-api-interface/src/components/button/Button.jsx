import * as S from './styled'

export const Button = (props) => {
    const { children, onClick } = props;

    return (
        <S.Button className='bordered' onClick={onClick} >
            { children }
        </S.Button>
    );
}
