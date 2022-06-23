import React, { useState } from "react";
import { Button } from "../Button";
import { ModalInput } from "../ModalInput";
import { ModalSelect } from "../ModalSelect";
import {
  BackgroundModal,
  ModalContainer,
  ModalHeader,
  ModalOptions,
} from "./style";

import api from "../../components/services/api";
import { toast } from "react-toastify";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export const DashModal = ({ setModal }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token"))
  );


  const onSubmits = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log(res);
        toast.success("Tecnologia cadastrada");
        setModal(false);
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

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
          <form id="form" onSubmit={handleSubmit(onSubmits)}>
            <ModalInput
              register={register}
              name="title"
              label="Nome"
              placeholder="Digite a Tecnologia"
            />
            <ModalSelect register={register} name="status" label="Tecnologia" />
          </form>
        </ModalOptions>
        <Button form="form" type="submit">
          Cadastrar Tecnologia
        </Button>
      </ModalContainer>
    </BackgroundModal>
  );
};
