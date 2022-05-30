import React, { useState } from "react";
import "./AddTarefa.css";
import Button from "./Button";

const AddTarefa = ({ handleAdicionaTarefa }) => {
  const [insereDados, setInsereDados] = useState("");
  const [insereDadosDesc, setInsereDadosDesc] = useState("");

  const handleInsereDados = (e) => {
    setInsereDados(e.target.value);
  };
  const handleInsereDadosDesc = (e) => {
    setInsereDadosDesc(e.target.value);
  };

  const handleAdicionaTarefaClick = () => {
    handleAdicionaTarefa(insereDados, insereDadosDesc);
    setInsereDados("");
    setInsereDadosDesc("");
  };

  return (
    <>
      <div className="add-tarefa-container">
        <input
          onChange={handleInsereDados}
          value={insereDados}
          className="add-tarefa-input"
          type="text"
          placeholder="Título da tarefa"
        />
        <div className="add-tarefa-button-container">
          <Button onClick={handleAdicionaTarefaClick}>Adicionar</Button>
        </div>
      </div>

      <div className="add-desctarefa-container">
        <input
          onChange={handleInsereDadosDesc}
          value={insereDadosDesc}
          className="add-desctarefa-input"
          type="text"
          placeholder="Descrição da tarefa"
        />
      </div>
    </>
  );
};

export default AddTarefa;
