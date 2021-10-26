import React from 'react';
import { FetchProfile, SearchProfile } from './Profile';
import './App.css';

function App() {
  const [profile, setProfile] = React.useState(null);
  const [username, setUsername] = React.useState('cemalokten');

  return (
    <main>
      <SearchProfile setUsername={setUsername} />
      <FetchProfile
        username={username}
        profile={profile}
        setProfile={setProfile}
      />
    </main>
  );
}

export default App;
