import api from "../../services/api";

import { Redirect, useHistory } from "react-router-dom";

import { AnimatedContainer, Container, Logo, StyledDiv } from "./styles";
import { useEffect, useState } from "react";
import { Trash } from "phosphor-react";

import { DashModal } from "../../Modal";

export const Dashboard = ({ authenticated, setAuthenticated }) => {
  const user = JSON.parse(localStorage.getItem("@Kenziehub:user"));

  const history = useHistory();

  const handleNavigation = (patch) => {
    return history.push(patch);
  };

  const [modal, setModal] = useState(false);

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.clear();
    // handleNavigation("/");
  };

  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    api
      .get(`/users/${user.id}`)
      .then((res) => {
        setUserInfo(res.data.techs);
      })
      .catch((err) => console.log(err));
  }, [userInfo]);

  if (!authenticated) {
    return <Redirect to="/" />;
  }

  return (
    <>
    <Container>
      <Logo>
        <div>
          <h1 onClick={() => handleNavigation("/")}>Kenzie Hub</h1>
          <button onClick={handleLogout}>Sair</button>
        </div>
        <div>
          <h2>Olá, {user.name}</h2>
          <span>{user.course_module}</span>
        </div>
        <div>
          <h3>Tecnologias</h3>
          <button onClick={() => setModal(true)}>+</button>
        </div>
      </Logo>
      <StyledDiv>
        <AnimatedContainer>
          {userInfo.map((tech) => (
            <div key={tech.id}>
              <h4>{tech.title}</h4>
              <div>
                <p>{tech.status}</p>
                <Trash size={20} weight="regular" />
              </div>
            </div>
          ))}
        </AnimatedContainer>
      </StyledDiv>
    </Container>
      {modal && <DashModal setModal={setModal} />}
    
    </>
  );
};
