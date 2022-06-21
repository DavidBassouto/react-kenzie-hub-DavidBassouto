import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;

  p {
    color: var(--gray);
  }
`;

export const InputContainer = styled.div`
  background-color: #868e9688;
  border-radius: 5px;
  border: solid 1px var(--white);
  color: var(--white);
  padding: 8px;
  width: 100%;
  display: flex;
  gap: 5px;
  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--white);
    opacity: none;
    &::placeholder {
      color: var(--white);
    }
  }
`;
