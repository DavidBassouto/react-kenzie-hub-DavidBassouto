import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import api from "../../services/api";
import { toast } from "react-toastify";

import { Redirect, useHistory } from "react-router-dom";

import { Button } from "../../Button";
import { AnimatedContainer } from "../../Form/style";
import { Container, Logo, StyledDiv } from "./styles";
import { StyledInput } from "../../Input";

export const Cadastro = ({ authenticated }) => {
  const history = useHistory();

  const handleNavigation = (patch) => {
    return history.push(patch);
  };

  const formSchema = yup.object().shape({
    password: yup.string().required("Digite sua senha"),
    confirmPassword: yup
      .string()
      .required("Repita sua senha")
      .oneOf([yup.ref("password")], "Senha não coincide"),
    // .min(8, "Mínimo de 8 dígitos")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\.*])/,
    //   "Deve conter letra maiúscula, minúscula, número e caractere especial"
    // )
    email: yup.string().required("Digite um email").email("Email inválido"),
    name: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmits = ({ email, password, name, course_module, bio }) => {
    const user = { email, password, name, course_module, bio };
    api
      .post("/users", user)
      .then((res) => {
        console.log(res);
        toast.success("Conta criada com Sucesso!");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };
  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <Container>
      <Logo>
        <h1>Kenzie Hub</h1>
        <button onClick={() => handleNavigation("/login")}>Login</button>
      </Logo>
      <StyledDiv>
        <h2>Crie sua Conta</h2>
        <span>Rapido e grátis, vamos nessa!</span>
        <AnimatedContainer>
          <form id="form" onSubmit={handleSubmit(onSubmits)}>
            <StyledInput
              error={errors.name?.message}
              register={register}
              name="name"
              label="Nome"
              placeholder="Digite aqui seu nome"
            />

            <StyledInput
              error={errors.email?.message}
              register={register}
              name="email"
              label="Email"
              placeholder="Digite aqui seu email"
            />

            <StyledInput
              error={errors.password?.message}
              register={register}
              name="password"
              type="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
            />

            <StyledInput
              error={errors.confirmPassword?.message}
              register={register}
              name="confirmPassword"
              type="password"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha anterior"
            />
            <StyledInput
              error={errors.bio?.message}
              register={register}
              name="bio"
              label="Bio"
              placeholder="Fale sobre voce"
            />
            <StyledInput
              error={errors.contact?.message}
              register={register}
              name="contact"
              type="text"
              label="Contato"
              placeholder="Opção de contato"
            />

            <StyledInput
              error={errors.course_module?.message}
              register={register}
              name="course_module"
              type="text"
              label="Selecionar Módulo"
              placeholder="Em qual módulo você está?"
            />
          </form>
        </AnimatedContainer>
        <Button form="form" type="submit">
          Cadastrar
        </Button>
      </StyledDiv>
    </Container>
  );
};
