import React from "react";
import { Button } from "../Button";
import { ModalInput } from "../ModalInput";
import { ModalSelect } from "../ModalSelect";
import {
  BackgroundModal,
  ModalContainer,
  ModalHeader,
  ModalOptions,
} from "./style";

export const DashModal = ({ setModal }) => {
  return (
    <BackgroundModal>
      <ModalContainer>
        <ModalHeader>
          <div>
            <h5>Cadastrar Tecnologia</h5>
            <button onClick={() => setModal(false)}>X</button>
          </div>
        </ModalHeader>
        <ModalOptions>
          <div>
            <ModalInput label="Nome" placeholder="Digite a Tecnologia" />
            <ModalSelect label="Tecnologia" />
          </div>
        </ModalOptions>
        <Button>Cadastrar Tecnologia</Button>
      </ModalContainer>
    </BackgroundModal>
  );
};
