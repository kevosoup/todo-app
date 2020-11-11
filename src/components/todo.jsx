import React from 'react';

export default function Todo(props) {

    return <li className={ `collection-item ${ props.todo.finished ? "green lighten-1" : "orange lighten-1" }` }>
        <label className="white-text">
            <input className="filled-in"
                type="checkbox"
                checked={ props.todo.finished }
                onChange= { props.changeTodo }
                data-uuid={ props.todo.uuid } />

            <span>{ props.todo.text }</span>
        </label>
    </li>;

}