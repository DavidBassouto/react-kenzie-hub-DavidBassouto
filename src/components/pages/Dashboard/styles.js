import styled, { keyframes } from "styled-components";

const appearFromBottom = keyframes`
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
`;

export const Logo = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 10px;
  div {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
  h1 {
    cursor: pointer;
    color: var(--pink);
    font-size: 16px;
  }
  h3 {
    font-size: 14px;
  }
  span {
    color: var(--gray);
  }
  button {
    padding: 10px;
    background: var(--darkblue);
    border-radius: 5px;
    color: var(--white);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${appearFromBottom} 2s;
  gap: 10px;

  > div {
    background: var(--black);

    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 50px;
    border-radius: 10px;
    align-items: center;

    gap: 5px;
    padding: 12px;
    &:hover {
      background-color: var(--gray);
      p {
        color: var(--white);
      }
      svg {
        color: var(--white);
      }
    }

    div {
      width: 40%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: end;
      gap: 5px;
      p {
        color: var(--gray);
      }
      svg {
        cursor: pointer;
        color: var(--gray);
      }
    }
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
  max-width: 600px;
  min-height: 50%;
  max-height: fit-content;
  background: var(--darkblue);
  > span {
    color: var(--gray);
  }
`;
