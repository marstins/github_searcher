import { useContext } from "react";
import { GithubContext } from "../providers/github-provider";

function UseGithub() {
  const { githubState, getUser, getUserRepos, getUserStarred } = useContext(GithubContext);

  return { githubState, getUser, getUserRepos, getUserStarred };
}

export default UseGithub;