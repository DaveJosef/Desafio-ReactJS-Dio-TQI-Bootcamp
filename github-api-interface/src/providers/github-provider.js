import React, { createContext, useCallback, useState } from 'react';

export const GithubContext = createContext({
    user: {

    },
    repos: [],
    starred: [],
});

const GithubProvider = ({ children }) => {
    const [githubState, setGithubState] = useState({
        userExists: false,
        user: {

        },
        repos: [],
        starred: [],
    });

    const getUser = (username) => {
        const user = {
          login: 'DaveJosef',
          name: 'José David',
          company: '@ifpb-cz-ads',
          location: 'Sousa, Paraiba, Brazil',
          twitter_username: 'josedaaaaavid',
          bio: 'Stand by previous works',
          commits: 1000000,
          avatar_url: 'https://avatars.githubusercontent.com/u/50461429?v=4',
          html_url: 'https://google.com'
        };

        setGithubState((prevState) => ({
            ...prevState,
            userExists: true,
            user,
        }));
    }


    const getUserRepos = (username) => {
        const repoList = [
          {
            name: 'reponame',
            description: 'description',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame2',
            description: 'description2',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame3',
            description: 'description3',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame4',
            description: 'description4',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame5',
            description: 'description5',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame6',
            description: 'description6',
            html_url: 'https://google.com',
          },
        ];
      
        setGithubState((prevState) => ({
            ...prevState,
            repos: repoList,
        }));
    }

    const getUserStarred = (username) => {
        const repoList = [
          {
            name: 'reponame',
            description: 'description',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame2',
            description: 'description2',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame3',
            description: 'description3',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame4',
            description: 'description4',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame5',
            description: 'description5',
            html_url: 'https://google.com',
          },
          {
            name: 'reponame6',
            description: 'description6',
            html_url: 'https://google.com',
          },
        ];
      
        setGithubState((prevState) => ({
            ...prevState,
            starred: repoList,
        }));
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
