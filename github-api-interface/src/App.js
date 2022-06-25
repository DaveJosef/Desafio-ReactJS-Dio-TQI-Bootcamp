import { SearchBar } from './components/search-bar';
import { ProfileData } from './components/profile-data';
import { RepoGallery } from './components/repo-gallery/RepoGallery';

import useGithub from './hooks/github-hooks';

function App() {
  const { githubState } = useGithub();
  
  return (
    <div className="App">
      <SearchBar />
      <div className="Columns" >
        <ProfileData user={ githubState.user } />
        <RepoGallery />
      </div>
    </div>
  );
}

export default App;
