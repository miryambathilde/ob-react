/**
 * Ejemplo de uso del Hook useState
 * 
 * Crear un componente de tipo función y acceder a su estado privado
 * a través de un hook y, además, poder modificarlo
 */

// 1. IMPORTAR EL HOOK
import React, { useState } from 'react';

const Ejemplo1 = () => {

	// 2 DECLARAR UN VALOR INICIAL

	// valor inicial para un contador
	const valorInicial = 0;

	// valor inicial para una persona
	const personaInicial = {
		nombre: 'Miryam',
		email: 'miryam@gmail.com'
	}

	/**
	 * Queremos que el VALORINICIAL Y PERSONAINICIAL sean parte del estado del componente
	 * para así poder gestonar su cambio y que éste se vea reflejado en la vista del componente
	 * 
	 * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
	 */

	const [contador, setContador] = useState(valorInicial);
	const [persona, setPersona] = useState(personaInicial);

	/**
	 * Función para actualizar el estado privado que contienen el contador
	 */
	function incrementarContador() {
		// ? funcionParaCambiar(nuevoValor)
		setContador(contador + 1);
	}

	/**
	 * 
	 * @param {string} nombre 
	 */

	/**
	 * Función para actualizar el estado de persona en el componente
	 */
	function actualizarPersona(nombre) {
		setPersona(
			{
				nombre: 'Pepe',
				email: 'pepe@gmail'
			}
		)
	}

	return (
		<div>
			<h1>*** Ejemplo de useState() ***</h1>
			<h2>CONTADOR: {contador}</h2>
			<h2>DATOS DE LA PERSONA:</h2>
			<h3>NOMBRE: {persona.nombre}</h3>
			<h4>EMAIL: {persona.email}</h4>
			{/*BLOQUE DE BOTONES PARA ACTUALIZAR EL ESTADO DEL COMPONENTE */}
			<button onClick={incrementarContador} >Incrementar contador</button>
			<button onClick={actualizarPersona} >Actualizar persona</button>
		</div>
		
	);
}

export default Ejemplo1;

