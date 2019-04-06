import { useState, useEffect } from 'react';

export default () => {

    const [latitude, setLatitude] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(
        () => {
            window.navigator.geolocation.getCurrentPosition(
                position => setLatitude(position.coords.latitude),
                err => setErrorMsg(err.message)
            );
        },
        []
    );

    // Could return as object but community convention is to use an array
    //  - an object would be more specific and perhaps less error prone
    return [latitude, errorMsg];
};
