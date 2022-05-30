import React from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";
import "./DetalheTarefa.css";

const DetalheTarefa = (tarefas) => {
  var desctarefa = tarefas;
  console.log(tarefas.tarefas.length);
  const params = useParams();
  const history = useHistory();
  const handleVoltarButtonClick = () => {
    history.goBack();
  };
  var descricao;
  for (var i = 0; i < tarefas.tarefas.length; i++) {
    if (tarefas.tarefas[i].title == params.tituloTarefa)
      descricao = tarefas.tarefas[i].desc;
  }

  return (
    <>
      <div className="detalhe-tarefa-container">
        <h2>{params.tituloTarefa}</h2>
        <p>{descricao}</p>
      </div>
      <div className="voltar-button-container">
        <Button onClick={handleVoltarButtonClick}>Voltar</Button>
      </div>
    </>
  );
};

export default DetalheTarefa;
