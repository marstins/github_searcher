import React, { useState } from "react";
import UseGithub from "../../hooks/github-hooks";
import * as S from "./style";

function Header() {
  
  const { getUser, getUserRepos, getUserStarred } = UseGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return (getUser(usernameForSearch), getUserRepos(usernameForSearch), getUserStarred(usernameForSearch));
  }
  
  return (
    <header>
      <S.Wrapper>
        <input type="text" placeholder="Type the username" onChange={(event) => setUsernameForSearch(event.target.value)}></input>
        <button type="submit" onClick={submitGetUser}>Search</button>
      </S.Wrapper>
    </header>
  )
}

export default Header;