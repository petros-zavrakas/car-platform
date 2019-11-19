import React from "react";
import Wrapper from "../../common/components/wrapper/Wrapper";
import { HeaderContainer, Logo } from "./Header.styles";

const Header = () => {
  return (
    <HeaderContainer data-test="HeaderComponent">
      <Wrapper>
        <Logo data-test="logo">FCG<span>Car Market</span></Logo>
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
