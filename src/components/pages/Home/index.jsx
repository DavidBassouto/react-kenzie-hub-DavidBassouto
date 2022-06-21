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
      .required("Campo inválido")
      .min(8, "Mínimo de 8 dígitos")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])/,
        "Mín 8 digitos,com letra maiúscula e minuscula,um número e um caractere especial"
      ),

    email: yup.string().required("Email inválido").email(),
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
console.log(errors)
  return (
    <Container>
      <Logo>
        <h1>Kenzie Hub</h1>
      </Logo>
      <StyledDiv>
        <h2>Login</h2>
        <AnimatedContainer>
          <form onSubmit={handleSubmit(onSubmits)}>
            <StyledInput
              register={register}
              name="email"
              icon={FiUser}
              label="Email"
              placeholder="Digite seu Email"
            />
            {errors.email && <span>{errors.email.message}</span>}

            <StyledInput
              register={register}
              name="password"
              type="password"
              icon={FiLock}
              label="Senha"
              placeholder="Senha"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </form>
        </AnimatedContainer>
        <Button type="submit">Login</Button>
        <span>Ainda não possui uma conta?</span>
        <Button onClick={() => handleNavigation("/cadastro")} pinkSchema>
          Cadastre-se
        </Button>
      </StyledDiv>
    </Container>
  );
};
