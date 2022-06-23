import styled from "styled-components";

export const BackgroundModal = styled.div`
  padding: 10px;
  width: 100%;
  height: 100%;
  margin: auto;
`;

export const ModalContainer = styled.div`
  width: 100%;
  max-width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background: var(--darkblue);
  border-radius: 10px;
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background: var(--gray);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  div {
    width: 100%;
    height: 40px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    > button {
      padding: 4px;
      background: var(--darkblue);
      border-radius: 5px;
      color: var(--white);
    }
  }
`;

export const ModalOptions = styled.div`
  width: 80%;

  > form {
    width: 100%;
    height: 150px;
    display: flex;

    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
