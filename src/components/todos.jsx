import React from 'react';

import Todo from './todo.jsx';

export default function Todos(props) {

    return props.todos.length ?  <div className="card-panel">
        <h4 className="header">{ props.header }</h4>

        <ul className="collection">

            { props.todos.map( todo => {

                return <Todo key={todo.uuid}
                    archived={props.archived}
                    todo={todo}
                    changeTodo={props.changeTodo}
                    archiveTodo={props.archiveTodo} 
                />;

            } ) }

        </ul>
    </div> : <></>;

}