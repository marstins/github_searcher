import React from "react";
import Header from "../header";
import useGithub from "../../hooks/github-hooks"
import * as S from "./style";

function Layout({ children }) {

  const { githubState } = useGithub();
  
  return (
    <S.WrapperLayout>
      <Header />
      {githubState.loading ? <p>Loading</p> : <>{children}</>}
    </S.WrapperLayout>
  )
}

export default Layout;