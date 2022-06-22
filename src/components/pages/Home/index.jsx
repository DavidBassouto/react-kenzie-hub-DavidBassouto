import { Redirect, useHistory } from "react-router-dom";

import { Button } from "../../Button";
import { AnimatedContainer } from "../../Form/style";
import { Container, Logo, StyledDiv } from "./styles";
import { StyledInput } from "../../Input";

export const Home = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (patch) => {
    return history.push(patch);
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <StyledDiv>
        <AnimatedContainer>
          <Logo>
            <h1>Kenzie Hub</h1>
            <p>Simples, intuitivo e eficiente</p>
          </Logo>
        </AnimatedContainer>
        <Button onClick={() => handleNavigation("/login")}>Entrar</Button>
      </StyledDiv>
    </Container>
  );
};
