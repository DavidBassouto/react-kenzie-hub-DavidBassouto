import { Container, InputContainer } from "./style";

export const ModalSelect = ({ register, name, label, ...rest }) => {
  return (
    <Container>
      <div>
        <p>{label}</p>
      </div>
      <InputContainer>
        <select {...register(name)} {...rest}>
          <option>Iniciante</option>
          <option>Intermediário </option>
          <option>Avançado</option>
        </select>
      </InputContainer>
    </Container>
  );
};
