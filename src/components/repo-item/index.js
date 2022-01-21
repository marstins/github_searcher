import React from "react";
import * as S from "./style"

function RepoItem(props) {
  const { name, linkToRepo, fullName } = props;

  return (
    <S.Wrapper>
      <S.WrapperTitle>{name}</S.WrapperTitle>
      <S.WrapperFullName>{fullName} </S.WrapperFullName>
      <S.WrapperLink 
        href={linkToRepo} 
        target="_blank" 
        rel="noreferrer"
      >
        {fullName}
      </S.WrapperLink>
    </S.Wrapper>
  );
}

export default RepoItem;