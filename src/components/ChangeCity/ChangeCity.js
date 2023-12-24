import React from 'react'


function ChangeCity(props) {
    async function handleClick () {
        const city = prompt("enter city")
        const APIKeyGeo = "98e9e14c2785446d937cf50316e384a2";
        const request = await fetch(`https://api.geoapify.com/v1/geocode/search?text=${city}&apiKey=${APIKeyGeo}`)
        const cityJSON = await request.json();
        const coordinates = {latitude: cityJSON.features[0].properties.lat, longitude: cityJSON.features[0].properties.lon};
        if (cityJSON.features) {
            props.setLocation(coordinates)
        }
    }
  return (
    <button className='custom__button p__arial' onClick={handleClick}>Change City</button>
  )
}


export default ChangeCity