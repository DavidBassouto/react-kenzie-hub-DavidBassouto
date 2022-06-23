import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 7px;

  p {
    color: var(--white);
  }
  span {
    color: var(--pink);
    font-size: 10px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
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
  select {
    background: transparent;
    flex: 1;
    border: 0;
    color: var(--gray);
    &::placeholder {
      color: var(--gray);
    }
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: var(--pink);
      svg {
        color: var(--pink);
      }
    `}
`;
