import React, {useState, useEffect} from 'react';



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

            { showWelcome ? <div className="center"><p>Welcome</p></div> : <></>};

            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container">
                    <a href="/" id="logo-container" className="brand-logo">Todo App</a>

                    <ul className="right">
                        <li>
                            <a href="/todos">Todos</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>;

}