import React from "react";
import Wrapper from "../../components/wrapper/Wrapper";
import SwitchTheme from "../switch-theme/SwitchTheme";
import { HeaderContainer, Logo } from "./Header.styles";

const Header = ({ onSwitchTheme }) => {
  return (
    <HeaderContainer data-test="HeaderComponent">
      <Wrapper>
        <Logo data-test="logo">
          FCG<span>Car Market</span>
        </Logo>
        <SwitchTheme onSwitchTheme={onSwitchTheme} />
      </Wrapper>
    </HeaderContainer>
  );
};

export default Header;
