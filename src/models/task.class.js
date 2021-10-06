import { LEVELS } from "./levels.enum";

// nombre, descripcion, si esta completada o no, y orden de prioridad
export class Task {
	name = '';
	description = '';
	completed = false;
	level = LEVELS.NORMAL;

	contructor(name, description, completed, level) {
		this.name = name;
		this.description = description;
		this.completed = completed;
		this.level = level;
	}
}