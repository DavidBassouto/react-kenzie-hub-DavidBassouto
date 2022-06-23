import { Container, InputContainer } from "./style";

export const ModalInput = ({ label, ...rest }) => {
  return (
    <Container>
      <div>
        <p>{label}</p>
      </div>
      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};
