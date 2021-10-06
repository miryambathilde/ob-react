// rccp - react component class prototypes
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeting extends Component {

	/* añadimos contructor con props, que son las propiedades que puede recibir un componente, para la comunicacion padre/hijo  */
	/* el state es privado e inmutable por default, por lo que para cambiar la vista se usa la función setState */
	constructor(props) {
		super(props);
		this.state = {
			age: 39,
		};
	}

	render() {
		return (
			<div>
				<h1>Hola {this.props.name}</h1>
				<h2>Tu edad es: {this.state.age}</h2>
				{/* creamos en el boton onclick y la funcion birthday */}
				<div>
					<button onclick={this.birthday}>Cumplir años</button>
				</div>
			</div>
		);
	}

	/* el state es privado e inmutable por default, por lo que para cambiar la vista se usa la función setState */
	/* la función flecha nos permite usar el this.setState */
	birthday = () => {
		this.setState((prevState) => (
			{
				age: prevState.age +1
			}
		))
	}


}

/* los propTypes requiere de tipo */
Greeting.propTypes = {	
	name: PropTypes.string,
};

export default Greeting;