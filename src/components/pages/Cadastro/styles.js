import styled from "styled-components";

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
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  > h1 {
    color: var(--pink);
    font-size: 16px;
  }
  > button {
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
  max-width: 500px;
  min-height: 50%;
  max-height: fit-content;
  background: var(--darkblue);
  > span {
    color: var(--gray);
  }
`;
