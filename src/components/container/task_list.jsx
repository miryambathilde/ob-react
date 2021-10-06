import React from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from '../../models/task.class';
import TaskComponent from "../pure/task";

const TaskList = () => {

	const defaultTask = new Task('Example', 'Default description', 'false', LEVELS.NORMAL);

	/* ChangeState = (id) => {
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
