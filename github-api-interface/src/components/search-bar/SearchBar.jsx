import * as S from './styled';
import { useState } from 'react';

import { Button } from '../button';
import useGithub from '../../hooks/github-hooks';

export function SearchBar(props) {
    const [ username, setUsername ] = useState('');
    const { getUser } = useGithub();
        
    const submitUser = (event) => {
        if (!username) return;
        getUser(username);
        event.preventDefault();
    }

    const updateUsername = (event) => {
        setUsername(event.target.value);
    }

    return (
        <S.SearchBar>
            <input className='bordered' placeholder='Github username' onChange={updateUsername} value={username} ></input>
            <Button type='submit' onClick={submitUser} >Search</Button>
        </S.SearchBar>
    );
}
