import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../models/task.class';
// importamos la hoja de estilos de task.scss
import '../../styles/task.scss';
import { LEVELS } from "../../models/levels.enum";


const TaskComponent = ({ task }) => {

	useEffect(() => {
		console.log('Task created');
		return () => {
			console.log(`Task: ${task.name} is going to unmount`)
		};
	}, [task]);

	/**
	 * Funcion que devuelve un Badge
	 * dependiendo del nivel de la tarea
	 */
	function taskLevelBadge() {
		switch (task.level) {
			case LEVELS.NORMAL:
				return (
					<h6 className="mb-0">
						<span className="badge bg-primary">{ task.level}</span>
					</h6>)
			case LEVELS.URGENT:
				return (
					<h6 className="mb-0">
						<span className="badge bg-warning">{task.level}</span>
					</h6>)
			case LEVELS.BLOCKING:
				return (
					<h6 className="mb-0">
						<span className="badge bg-danfer">{task.level}</span>
					</h6>)
			default:
				break;
		}

	}
		
	/**
		 * 
		 * @returns icono dependiendo el estado de la tarea
		 */

	function taskCompletedIcon() {
		if (task.completed) {
			return (<i className='bi-toggle-on' style={{ color: 'green' }}></i>);
		} else {
			return (<i className='bi-toggle-off' style={{ color: 'grey' }}></i>);
		}
	}

	return (
		<tr className='fw-normal'>
			<th>
				<span className='ms-2'>{task.name}</span>
			</th>
			<td className='align-middle'>
				<span>{task.description}</span>
			</td>
			<td className='align-middle'>
				<span>{taskLevelBadge}</span>
			</td>
			<td className='align-middle'>
				{/* Execution of function to return icon depending on completion */}
				{taskCompletedIcon}
				<i className='bi-trash' style={{ color: 'tomato' }}></i>
			</td>
		</tr>
   );
};


/* instanceOf es para poder decirle que es del tipo model Task */
TaskComponent.propTypes = {
	task: PropTypes.instanceOf(Task)
};


export default TaskComponent;
