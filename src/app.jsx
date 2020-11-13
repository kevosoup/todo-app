import { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

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
		setTodos( [ ...todos, { ...todo, finished: false, archived: false, uuid: uuid()} ] );
	}

	function changeTodo(event) {
		const tempTodos = [...todos]
		//Find appropriate todo
		const todo = tempTodos[ tempTodos.findIndex( todo => event.target.dataset.uuid === todo.uuid ) ]
		todo.finished = event.target.checked;
			
		setTodos(tempTodos);
	}

	function archiveTodo(event) {
		const tempTodos= [...todos]
		const todo = tempTodos [tempTodos.findIndex( todo => event.target.dataset.uuid === todo.uuid ) ]
		todo.archived = true;

		setTodos(tempTodos);
	}

	return <>

		<BrowserRouter>

			<Header visible={visible} />

			<Route exact path="/"><h1>Test</h1></Route>

			<Route path="/todos">

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
								todos={ todos.filter( todo => todo.finished && !todo.archived ) } 
								changeTodo={changeTodo}
								archiveTodo={archiveTodo}
							/>
						</div>

					</div>

				</main>

			</Route>

			<Route path="/archived">

				<main className="container">
					<div className="section">
						
						<div className="row">
							<Todos header="Archived"
								archived={true}
								todos={ todos.filter( todo => todo.archived && todo.finished ) }
							/>
						</div>

					</div>
				</main>

			</Route>
		
		</BrowserRouter>
	</>;
	
}

export default App;
