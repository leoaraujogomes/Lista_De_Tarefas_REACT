import React, { useState, useEffect } from "react";
import Tarefas from "./components/Tarefas";
import "./App.css";
import AddTarefa from "./components/AddTarefa";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import DetalheTarefa from "./components/DetalheTarefa";
import axios from "axios";
import Tarefa from "./components/Tarefa";

const App = () => {
  const [tarefas, setTarefas] = useState([
    {
      id: "1",
      title: "Academia",
      completed: false,
      desc: "Descrição",
    },
  ]);

  // useEffect(() => {
  //   const fetchTarefas = async () => {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.cypress.io/todos?_limit=5"
  //     );
  //     setTarefas(data);
  //   };
  //   fetchTarefas();
  // }, []);

  const handleTarefaClick = (tarefaId) => {
    const novasTarefas = tarefas.map((tarefa) => {
      if (tarefa.id === tarefaId)
        return { ...tarefa, completed: !tarefa.completed };
      return tarefa;
    });
    setTarefas(novasTarefas);
  };

  const handleAdicionaTarefa = (tituloTarefa, descTarefa) => {
    const novasTarefas = [
      ...tarefas,
      {
        title: tituloTarefa,
        id: uuidv4(),
        completed: false,
        desc: descTarefa,
      },
    ];

    setTarefas(novasTarefas);
  };

  const handleRemoveTarefa = (tarefaId) => {
    const novasTarefas = tarefas.filter((tarefa) => tarefa.id !== tarefaId);
    setTarefas(novasTarefas);
  };

  return (
    <>
      <div className="container">
        <Header />
        <>
          <AddTarefa handleAdicionaTarefa={handleAdicionaTarefa} />
        </>
      </div>
      <BrowserRouter>
        <div className="containerLista">
          <Route
            path="/"
            exact
            render={() => (
              <>
                <Tarefas
                  tarefas={tarefas}
                  handleTarefaClick={handleTarefaClick}
                  handleRemoveTarefa={handleRemoveTarefa}
                />
              </>
            )}
          />
          <Route path="/:tituloTarefa">
            <DetalheTarefa tarefas={tarefas} />
          </Route>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
