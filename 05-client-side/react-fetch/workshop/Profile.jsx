import React from 'react';
import { RepoList } from './ReposList';

const FetchProfile = ({ username, profile, setProfile }) => {
  React.useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((result) => result.json())
      .then((profile) => setProfile(profile));
  }, [username]);

  if (profile === null) return <h1>Loading</h1>;
  return (
    <div>
      <img src={profile.avatar_url} />
      <h1>{profile.name}</h1>
      <p>{profile.bio}</p>
      <RepoList repoUrl={profile.repos_url} />
    </div>
  );
};

const SearchProfile = ({ setUsername }) => {
  const submit = (e) => {
    e.preventDefault();
    setUsername(e.target.profile.value);
  };

  return (
    <form onSubmit={submit}>
      <input type="text" name="profile" id="profile" />
      <button type="submit">Load Profile</button>
    </form>
  );
};

export { FetchProfile, SearchProfile };
