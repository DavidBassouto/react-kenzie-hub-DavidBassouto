import api from "../../services/api";

import { Redirect, useHistory } from "react-router-dom";

import { Button } from "../../Button";
import { AnimatedContainer } from "../../Form/style";
import { Container, Logo, StyledDiv } from "./styles";

export const Dashboard = ({ authenticated }) => {
  const user = JSON.parse(localStorage.getItem("@Kenziehub:user"));
  console.log(user);

  const history = useHistory();

  const handleNavigation = (patch) => {
    return history.push(patch);
  };

  console.log(authenticated);
  if (!authenticated) {
    return <Redirect to="/" />;
  }

  //get dentro use Effect
  return (
    <Container>
      <Logo>
        <div>
          <h1 onClick={() => handleNavigation("/")}>Kenzie Hub</h1>
          <button onClick={() => handleNavigation("/login")}>Login</button>
        </div>
        <div>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </div>
      </Logo>
      <StyledDiv>
        <AnimatedContainer>Lista de techs</AnimatedContainer>
      </StyledDiv>
    </Container>
  );
};
