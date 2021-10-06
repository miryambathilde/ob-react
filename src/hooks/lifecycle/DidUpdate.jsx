/**
 * Ejemplo de uso de método componentDidUpdate en componente de CLASE
 * y uso de hook en componente funcional
 */

import React, { Component, useEffect } from 'react';

export class Didupdate extends Component {

	componentDidUpdate() {
		console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
	}

	render() {
		return (
			<div>
				<h1>DidUpdate</h1>
			</div>
		);
	}
}


export const DidupdateHook = () => {

	useEffect(() => {
		console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
	}); // al quitarle los corchetes le quitamos los límites para que se ejecute siempre que haya un cambio de estado o de props

	return (
		<div>
			<h1>DidUpdate</h1>
		</div>
	);
}


