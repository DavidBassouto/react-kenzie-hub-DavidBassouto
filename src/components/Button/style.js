import styled from "styled-components";

export const StyledButton = styled.button`
  width: 82%;
  padding: 12px;

  background: ${(props) => (props.pinkSchema ? "#343B41" : "#FF577F")};
  color: var(--white);
  border-radius: 8px;
  border: 0;
`;
