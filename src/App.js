import logo from './logo.svg';
import './App.css';
import Ejemplo4 from "./hooks/Ejemplo4";
//import Greeting from "./components/pure/greeting";
//import Greetingf from "./components/pure/greetingF";
//import TaskList from "./components/container/task_list";
//import Ejemplo1 from "./hooks/Ejemplo1";
//import Ejemplo2 from "./hooks/Ejemplo2";
//import MiComponenteConContexto from "./hooks/Ejemplo3";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* EJEMPLO DE COMPONENTE DE CLASE */}
        {/* Importamos el Componente propio Greeting.jsx y lo renderizamos*/}
        {/*le pasamos la propiedad name*/}
        {/* <Greeting name="Miryam"></Greeting> */}

        {/* EJEMPLO DE COMPONENTE FUNCIONAL */}
        {/* Componente de ejemplo de componente funcional */}
        {/* <Greetingf name="Miryam"></Greetingf> */}

        {/* Componente de listado de tareas */}
        {/* <TaskList></TaskList> */}

        {/* EJEMPLOS DE USOS DE HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        <Ejemplo4 nombre='Miryam'>
          {/* TODO lo que hay aqui dentro, es tratado como props.children */}
          <h3>Contenido del props.children</h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
