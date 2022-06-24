import { SearchBar } from './components/search-bar';
import { ProfileData } from './components/profile-data';
import { RepoGallery } from './components/repo-gallery/RepoGallery';

import useGithub from './hooks/github-hooks';

function App() {
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
  const repoList = [
    {
      id: 0,
      name: 'reponame',
      description: 'description',
      html_url: 'https://google.com',
    },
    {
      id: 1,
      name: 'reponame2',
      description: 'description2',
      html_url: 'https://google.com',
    },
    {
      id: 2,
      name: 'reponame3',
      description: 'description3',
      html_url: 'https://google.com',
    },
    {
      id: 3,
      name: 'reponame4',
      description: 'description4',
      html_url: 'https://google.com',
    },
    {
      id: 4,
      name: 'reponame5',
      description: 'description5',
      html_url: 'https://google.com',
    },
    {
      id: 5,
      name: 'reponame6',
      description: 'description6',
      html_url: 'https://google.com',
    },
  ];

  const { githubState } = useGithub();
  
  return (
    <div className="App">
      <SearchBar />
      <div className="Columns" >
        <ProfileData user={ githubState.user ? githubState.user : user } />
        <RepoGallery repoList={ repoList } starredList={ [repoList[0]] } />
      </div>
    </div>
  );
}

export default App;
