import {useState, useEffect} from 'react';

export default function usePageVisibility() {
    const [visible, setVisible] = useState( !document.hidden );

    const onVisibilityChange = () => setVisible(!document.hidden);

    useEffect( () => {

        window.addEventListener('visibilitychange', onVisibilityChange);

        //cleanup of effect
        return () => window.removeEventListener('visibilitychange', onVisibilityChange);

    } );

    return visible;
}