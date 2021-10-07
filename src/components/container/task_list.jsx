import React, { useState, useEffect } from 'react';
import { LEVELS } from "../../models/levels.enum";
import { Task } from '../../models/task.class';
import TaskComponent from "../pure/task";
//importamos task.scss
import '../../styles/task.scss';
import Taskform from "../pure/forms/taskForm";

const TaskList = () => {
	
	const defaultTask1 = new Task('Example1', 'Default description', 'true', LEVELS.NORMAL);
	const defaultTask2 = new Task('Example2', 'Default description', 'false', LEVELS.URGENT);
	const defaultTask3 = new Task('Example3', 'Default description', 'false', LEVELS.BLOCKING);
	
	// definimos estado del componente a través de useState
	const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);
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
			<div className="col-12">
				<div className='card'>
					{/* card header - TITLE */}
					<div className='card-header p-3'>
						<h5>Your tasks:</h5>
					</div>
					{/* Card Body - CONTENT */}
					<div className='card-body' data-mdb-perfect-scrollbar='true' style={{ position: 'relative', height: '400px' }}>
						<table>
							<thead>
								<tr>
									<th scope='col'>Title</th>
									<th scope='col'>Description</th>
									<th scope='col'>Priority</th>
									<th scope='col'>Actions</th>
								</tr>
							</thead>
							<tbody>
								{tasks.map((task, index) => {
									return (
										<TaskComponent
											key={index}
											task={task}
										></TaskComponent>
									)
								})}
								{/* TODO: Iterar sobre una lista de tareas */}
								<TaskComponent task={defaultTask1}></TaskComponent>
							</tbody>
						</table>
					</div>
						<Taskform></Taskform>
				</div>

				<h1>Your Tasks:</h1>
			</div>
			{/* TODO: Aplicar un FOR/MAP para renderizar la lista */}
			<TaskComponent task={defaultTask1}></TaskComponent>
		</div>
	);
};


export default TaskList;
