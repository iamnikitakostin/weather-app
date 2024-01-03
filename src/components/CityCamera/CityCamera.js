import React, { useEffect } from 'react';
import './CityCamera.css';

function CityCamera(props) {
    const latitude = props.weather.data.location.lat;
    const longitude = props.weather.data.location.lon;
    const apiKey = "lNgTBjajNMx7RA1k0rbxjaOY2GRFWDK8";
    const [camera, setCamera] = React.useState(null);
    const [hidden, setHidden] = React.useState(true);

        useEffect(() => {
            async function getCamera (latitude, longitude) {
                const cameraId = await fetch(`https://api.windy.com/webcams/api/v3/webcams?lang=en&limit=10&offset=0&nearby=${latitude}%2C${longitude}%2C250`, {
                    method: 'GET',
                    headers: {
                    'Accept': 'application/json',
                    'x-windy-api-key': apiKey
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                    return data.webcams[0].webcamId;
                    })
                    .catch(error => {
                    console.error('Error:', error);
                    });

                console.log(cameraId)
                const cameraURL = await fetch(`https://api.windy.com/webcams/api/v3/webcams/${cameraId}?lang=en&include=images`, {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'x-windy-api-key': apiKey
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        return data.images.current.preview;
                    })
                console.log(cameraURL)
                setCamera(cameraURL)
            console.log(cameraURL)

            }

            getCamera(latitude, longitude);
        }, [latitude, longitude]);

    return (
    <div className='app__camera'>
        <button className='custom__button p__arial' onClick={() => setHidden(!hidden)}>{hidden ? "Camera Nearby" : "Close Image"}</button>
        {!hidden && <div className='camera__image'>
            {camera ? (<img src={`${camera}`} alt='picture of a place nearby'/>) : (<div>Sorry, the image is unavailable.</div>)}
        </div>}
    </div>
    );
}

export default CityCamera;
