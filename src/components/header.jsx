import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';



export default function Header(props) {
    const[showWelcome, setShowWelcome]= useState(false);

    useEffect( () => {
        if (props.visible) {
            setShowWelcome(true);
            setTimeout( ()=> {
                setShowWelcome(false);
            }, 1500 )
        }
    }, [props.visible] );

    return <header>

        { showWelcome ? <div className="center"><p>Welcome</p></div> : <></> }

        <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container">
                <Link to="/" id="logo-container" className="brand-logo">Todo App</Link>

                <ul className="right">
                    <li>
                        <Link to="/todos">Todos</Link>
                    </li>
                    <li>
                        <Link to="/archived">Archived</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </header>;

}