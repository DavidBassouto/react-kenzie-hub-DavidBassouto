import { StyledButton } from "./style";

export const Button = ({children, pinkSchema = false, ...rest}) => {
  return (
    <StyledButton pinkSchema={pinkSchema}  {...rest}>
      {children}
    </StyledButton>
  );
};
