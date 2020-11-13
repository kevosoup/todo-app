import React from 'react';

export default function Todo(props) {

    return <li className={ `collection-item ${ props.todo.finished ? "green lighten-1" : "orange lighten-1" }` }>
        <label className="white-text">
            { props.archived ? <></> : <input 
                className="filled-in"
                type="checkbox"
                checked= { props.todo.finished }
                onChange= { props.changeTodo }
                data-uuid= { props.todo.uuid } /> }

            <span>{ props.todo.text }</span>
        </label>

        { props.todo.finished && !props.todo.archived ? <div className="secondary-content white-text">
            <button style={ {cursor: 'pointer'} }
                className="material-icons"
                onClick= { props.archiveTodo }
                data-uuid= { props.todo.uuid }>
            archive
            </button>
        </div> : <></> }

        

    </li>;

}