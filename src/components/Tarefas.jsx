import React from 'react';
import Tarefa from './Tarefa';

const Tarefas = ({ tarefas, handleTarefaClick, handleRemoveTarefa }) =>{
    return (
        <>
            {tarefas.map((tarefa) => ( 
            <Tarefa tarefa = {tarefa} handleTarefaClick={handleTarefaClick} handleRemoveTarefa={handleRemoveTarefa}/>
            ))}
        </>
    )
};

export default Tarefas;