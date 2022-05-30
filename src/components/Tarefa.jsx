import React from "react";
import "./Tarefa.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import DetalheTarefa from "./DetalheTarefa";

const Tarefa = ({ tarefa, handleTarefaClick, handleRemoveTarefa }) => {
  const history = useHistory();
  const handleDetalheTarefaClick = () => {
    history.push(`/${tarefa.title}`);
  };
  return (
    <div
      className="tarefa-container"
      style={
        tarefa.completed
          ? {
              borderLeft: "6px solid #fdd10a",
              transition: "all 0.2s ease",
            }
          : { borderLeft: "0px solid #fdd10a", transition: "all 0.2s ease" }
      }
    >
      <div
        className="tarefa-title"
        onClick={() => handleTarefaClick(tarefa.id)}
      >
        {tarefa.title}
      </div>
      <div className="buttons-container">
        <button
          className="info-tarefa-button"
          onClick={handleDetalheTarefaClick}
        >
          <CgInfo />
        </button>
        <button
          className="remove-tarefa-button"
          onClick={() => handleRemoveTarefa(tarefa.id)}
        >
          <CgClose />
        </button>
      </div>
    </div>
  );
  //return <div className="tarefa-container">{tarefa.title}</div>;
};

export default Tarefa;
