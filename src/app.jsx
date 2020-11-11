import { useState } from 'react';

import uuid from './functions/uuid.js';
import useLocalStorage from './functions/hooks/useLocalStorage.js';
import usePageVisibility from './functions/hooks/usePageVisibility.js';

import AddTodo from './components/addTodo.jsx';
import Header from './components/header.jsx';
import Todos from './components/todos.jsx';

const savedTodos = JSON.parse( localStorage.getItem('savedTodos'));	

function App() {

	const [todos, setTodos] = useState(savedTodos || []);

	useLocalStorage('savedTodos', todos);

	const visible = usePageVisibility();

	function addTodo(todo) {
		setTodos( [ ...todos, { ...todo, finished: false, uuid: uuid()} ] );
	}

	function changeTodo(event) {
		const tempTodos = [...todos]

		//Find appropriate todo
		const todo = tempTodos[ tempTodos.findIndex( todo => event.target.dataset.uuid === todo.uuid ) ]
		todo.finished = event.target.checked;

		setTodos(tempTodos);

	}

	return <>
		
		<Header visible={visible} /> 

		<main className="container">
			<div className="section">
				<div className="row center">	
					<AddTodo addTodo={addTodo}/>
				</div>

				<div className="row">
					<Todos header="Stuff to do" 
						todos={ todos.filter( todo => !todo.finished ) } 
						changeTodo={changeTodo}
						/>
				</div>

				<div className="row">
					<Todos header="Completed" 
						todos={ todos.filter( todo => todo.finished ) } 
						changeTodo={changeTodo}
					/>
				</div>

			</div>

		</main>
	</>;
}

export default App;
