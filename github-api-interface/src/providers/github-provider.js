import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

export const GithubContext = createContext({
    loading: false,
    user: {

    },
    repos: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        loading: false,
        userExists: false,
        user: {

        },
        repos: [],
        starred: [],
    });

    const getUser = (username) => {
      
        setGithubState((prevState) => ({
          ...prevState,
          loading: true,
        }));
        
        api
          .get(`users/${username}`)
          .then(res => {

            console.log(res.data);

            const {
              login,
              name,
              company,
              location,
              twitter_username,
              bio,
              commits,
              avatar_url,
              html_url
            } = res.data;
            
            setGithubState((prevState) => ({
              ...prevState,
              userExists: true,
              user: {
                login,
                name,
                company,
                location,
                twitter_username,
                bio,
                commits,
                avatar_url,
                html_url
              }
            }));
            
          })
          .finally(() => {
            setGithubState((prevState) => ({
              ...prevState,
              loading: false,
            }));
            
          });
    }


    const getUserRepos = (username) => {

      setGithubState((prevState) => ({
        ...prevState,
        loading: true,
      }));
      
      api
        .get(`users/${username}/repos`)
        .then(res => {

          console.log(res.data);

          const repos = res.data;
          
          setGithubState((prevState) => ({
            ...prevState,
            repos
          }));
          
        })
        .finally(() => {
          setGithubState((prevState) => ({
            ...prevState,
            loading: false,
          }));
          
        });
    }

    const getUserStarred = (username) => {

      setGithubState((prevState) => ({
        ...prevState,
        loading: true,
      }));
      
      api
        .get(`users/${username}/starred`)
        .then(res => {

          console.log(res.data);

          const starred = res.data;
          
          setGithubState((prevState) => ({
            ...prevState,
            starred
          }));
          
        })
        .finally(() => {
          setGithubState((prevState) => ({
            ...prevState,
            loading: false,
          }));
          
        });
    }

    const ContextValue = {
        githubState,
        getUser: useCallback(
            (username) => getUser(username), []
        ),
        getUserRepos: useCallback(
            (username) => getUserRepos(username), []
        ),
        getUserStarred: useCallback(
            (username) => getUserStarred(username), []
        ),
    };

    return (
        <GithubContext.Provider value={ ContextValue } >
            { children }
        </GithubContext.Provider>
    );
}

export default GithubProvider;
