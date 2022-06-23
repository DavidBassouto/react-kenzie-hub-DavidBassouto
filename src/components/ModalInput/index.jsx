import { Container, InputContainer } from "./style";

export const ModalInput = ({register, name, label, ...rest }) => {
  return (
    <Container>
      <div>
        <p>{label}</p>
      </div>
      <InputContainer>
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
