import React, { useState } from 'react';

function AddTodo(props) {
    const [text, setText] = useState('');

    function handleTextChange(event) {
        setText(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.addTodo( {text} );
        setText('');
    }

    return <div className="col s12 m8 offset-m2">
        <div className="card-panel">
            <h4 className="header">Got something to do?</h4>

            <form onSubmit={handleSubmit}>
                <input type="text" value={text} onChange={handleTextChange} />
            </form>

        </div>
    </div>;

}

export default AddTodo;