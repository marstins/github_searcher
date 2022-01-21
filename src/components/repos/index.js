import React, { useEffect, useState } from "react";
import UseGithub from "../../hooks/github-hooks";
import RepoItem from "../repo-item";
import * as S from "./style"

function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = UseGithub();
  const [hasUserForSearchRepos, sethasUserForSearchRepos] = useState(false);

  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
    sethasUserForSearchRepos(githubState.repositories);
  }, [githubState.user.login]);

  
  return (
    <>
      {hasUserForSearchRepos ? 
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected" 
        >
          <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
          </S.WrapperTabList>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.repositories.map((item) => (
                <RepoItem 
                  key={item.id}
                  name={item.name} 
                  linkToRepo={item.full_name}
                  fullName={item.full_name}  
                />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <S.WrapperList>
              {githubState.starred.map((item) => (
                  <RepoItem 
                    key={item.id}
                    name={item.name} 
                    linkToRepo={item.full_name}
                    fullName={item.full_name}  
                  />
              ))}
            </S.WrapperList>
          </S.WrapperTabPanel>
        </S.WrapperTabs>
      : <></>}
    </>
  );
};

export default Repositories;