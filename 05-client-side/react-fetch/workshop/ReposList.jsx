import React from 'react';

const RepoList = ({ repoUrl }) => {
  const [repo, setRepo] = React.useState(null);

  React.useEffect(() => {
    fetch(repoUrl)
      .then((result) => result.json())
      .then((repo) => setRepo(repo));
  }, [repoUrl]);

  if (!repo) return <h2>🍉</h2>;
  return repo.map((repo) => <li key={repo.id}>👉 {repo.name}</li>);
};

export { RepoList };
