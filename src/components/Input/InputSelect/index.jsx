import { Container, InputContainer } from "./style";

export const InputSelect = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <div>
        <p>{label}</p> {!!error && <span>{error}</span>}
      </div>
      <InputContainer>
        <select {...register(name)} {...rest}>
          <option>Primeiro módulo (Introdução ao Frontend)</option>
          <option>Segundo módulo (Frontend Avançado)</option>
          <option>Terceiro módulo (Introdução ao Backend)</option>
          <option>Quarto módulo (Backend Avançado)</option>
        </select>
      </InputContainer>
    </Container>
  );
};
