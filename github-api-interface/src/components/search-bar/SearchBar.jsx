import * as S from './styled';
import { useState } from 'react';

import { Button } from '../button';

export function SearchBar(props) {
    const [ username, setUsername ] = useState('');
        
    const submitUser = () => {
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
