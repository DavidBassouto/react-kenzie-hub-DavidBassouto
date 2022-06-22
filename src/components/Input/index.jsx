import { Container, InputContainer } from "./style";

export const StyledInput = ({
  label,
  icon: Icon,
  register,
  name,
  error,
  ...rest
}) => {
  return (
    <Container>
      <div><p>{label}</p> {!!error && <span>{error}</span>}</div>
      <InputContainer isErrored={!!error}>
        {Icon && <Icon />}
        <input {...register(name)} {...rest} />
      </InputContainer>
    </Container>
  );
};
