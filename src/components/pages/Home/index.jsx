import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useHistory } from "react-router-dom";

import { Button } from "../../Button";
import { AnimatedContainer } from "../../Form/style";
import { Container, Logo, StyledDiv } from "./styles";
import { StyledInput } from "../../Input";
import { FiUser, FiLock } from "react-icons/fi";

export const Home = () => {
  const history = useHistory();

  const handleNavigation = (patch) => {
    return history.push(patch);
  };

  const formSchema = yup.object().shape({
    password: yup
      .string()
      .required("Digite sua senha")
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])/,
        "Deve conter letra maiúscula, minúscula, número e caractere especial"
      ),

    email: yup.string().required("Digite um email").email("Email inválido"),
  });

  const onSubmits = (data) => {
    console.log(data);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <Container>
      <Logo>
        <h1>Kenzie Hub</h1>
      </Logo>
      <StyledDiv>
        <h2>Login</h2>
        <AnimatedContainer>
          <form id="form" onSubmit={handleSubmit(onSubmits)}>
            <StyledInput
              error={errors.email?.message}
              register={register}
              name="email"
              icon={FiUser}
              label="Email"
              
            />
            

            <StyledInput
            error={errors.password?.message}
              register={register}
              name="password"
              type="password"
              icon={FiLock}
              label="Senha"
              
            />
            
          </form>
        </AnimatedContainer>
        <Button form="form" type="submit">Login</Button>
        <span>Ainda não possui uma conta?</span>
        <Button onClick={() => handleNavigation("/cadastro")} pinkSchema>
          Cadastre-se
        </Button>
      </StyledDiv>
    </Container>
  );
};
