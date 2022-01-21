import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import Repositories from "./components/repos";
import UseGithub from "./hooks/github-hooks";

function App() {
  const { githubState } = UseGithub();

  return (
    <Layout>
      {githubState.hasUser ? <>
        {githubState.loading ? (
          <p>Loading</p>
        ) : (
          <>
            <Profile />
            <Repositories />
          </>
        )}
      </> : <NoSearch />
      }
    </Layout>
  );
};

export default App;
