import styled, { keyframes } from "styled-components";
const appearFromTop = keyframes`
from{
    opacity:0;
    transform: translateY(-10px);
}
to{
    opacity:1;
    transform: translateY(0px);
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 100vh;
  width: 100%;
  gap: 10px;
  padding: 10px;

  animation: ${appearFromTop} 1s;
`;
export const Logo = styled.div`
  width: 90%;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  div {
    margin-bottom: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    span {
      color: var(--gray);
    }
  }
  h1 {
    cursor: pointer;
    color: var(--pink);
    font-size: 16px;
  }
  button {
    padding: 10px;
    background: var(--darkblue);
    border-radius: 5px;
    color: var(--white);
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 15px;

  border-radius: 10px;

  width: 90%;
  max-width: 700px;
  min-height: 50%;
  max-height: fit-content;
  background: var(--darkblue);
  > span {
    color: var(--gray);
  }
`;
