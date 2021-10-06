/**
 * Componente funcional con todos los ciclos de vida
 */

import React, { useEffect } from 'react';

const Allcycles = () => {


	// solo debe de haber un useEffect() para cada componente
	useEffect(() => {
		console.log('Componente creado');

		const intervalID = setInterval(() => {
			document.title = `${new Date()}`
			console.log('actualización del componente');
		}, 1000);
		return () => {
			console.log('Componente va a desaparecer');
			document.title = 'Tiempo detenido';
			clearInterval(intervalID);
		};
	}, []); // SE EJECUTA UNA VEZ 

	return (
		<div>
			
		</div>
	);
}

export default Allcycles;
