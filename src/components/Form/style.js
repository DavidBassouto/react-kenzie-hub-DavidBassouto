import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
from{
    opacity:0;
    transform: translateY(-50px);
}
to{
    opacity:1;
    transform: translateY(0px);
}
`;

export const AnimatedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromBottom} 1s;

  form {
    width: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;
