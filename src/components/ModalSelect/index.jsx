import { Container, InputContainer } from "./style";

export const ModalSelect = ({ label, ...rest }) => {
  return (
    <Container>
      <div>
        <p>{label}</p>
      </div>
      <InputContainer>
        <select {...rest}>
          <option>Iniciante</option>
          <option>Intermediário </option>
          <option>Avançado</option>
        </select>
      </InputContainer>
    </Container>
  );
};
