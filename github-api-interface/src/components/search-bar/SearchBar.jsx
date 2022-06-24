import * as S from './styled';
import { useState } from 'react';

import { Button } from '../button';
import useGithub from '../../hooks/github-hooks';

export function SearchBar(props) {
    const [ username, setUsername ] = useState('');
    const { getUser } = useGithub();
        
    const submitUser = () => {
        getUser(username);
        alert(`Hello, ${username ? username : 'username'}`);
    }

    const updateUsername = (username) => {
        setUsername(username);
    }

    return (
        <S.SearchBar>
            <input placeholder='Github username' onChange={(event) => updateUsername(event.target.value)} ></input>
            <Button type='submit' onClick={submitUser} >Search</Button>
        </S.SearchBar>
    );
}
