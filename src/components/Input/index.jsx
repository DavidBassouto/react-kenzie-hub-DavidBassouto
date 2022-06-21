import { Container, InputContainer } from "./style";

export const StyledInput = ({ label, icon: Icon, register, name, ...rest }) => {
  return (
    <Container>
      <p>{label}</p>
      <InputContainer>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
