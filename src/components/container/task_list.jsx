import React, { useState, useEffect } from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from '../../models/task.class';
import TaskComponent from "../pure/task";

const TaskList = () => {
	
	const defaultTask = new Task('Example', 'Default description', 'false', LEVELS.NORMAL);
	
	// definimos estado del componente a través de useState
	const [tasks, setTasks] = useState([defaultTask]);
	const [loading, setLoading] = useState(true); //por defecto SÍ que estará cargando

	// definimos el control del ciclo de vida del componente
	useEffect(() => {
		console.log('Task state has been modified');
		setLoading(false);
		return () => {
			console.log('TaskList component is going to unmount...');
		};
	}, [tasks]);


	/* const changeCompleted = (id) => {
		console.log('TODO: Cambiar estado de una tarea')
	} */


	return (
		<div>
			<div>
				Your Task:
			</div>
			{/* TODO: Aplicar un FOR/MAP para renderizar la lista */}
			<TaskComponent task={defaultTask}></TaskComponent>
		</div>
	);
};


export default TaskList;
