import React from 'react';
import { useState, useEffect} from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './storelocater.css'
import MAP_API_KEY from './config.js';

function MapPage(props) {
  
  const shobhaLocations = [
    { lat: 37.785073500979216, lng: -122.40817153262584, name: 'Shobha', address: '33 Powell St, San Francisco, CA', zip: '94102' },
    { lat: 37.794944, lng: -122.398472, name: 'Shobha', address: '2 Embarcadero Center, San Francisco, CA', zip: '94111' },
    { lat: 37.78626, lng: -122.45319, name: 'Shobha', address: '3595 California St, San Francisco, CA', zip: '94118' },
    { lat: 37.4447, lng: -122.1708, name: 'Shobha', address: '355 Stanford Shopping Center, Palo Alto, CA', zip: '94304' },
    { lat: 37.3946, lng: -121.9759, name: 'Shobha', address: '3343 Coronado Place, Santa Clara, CA', zip: '95054' } 
  ];

  const [activeMarker, setActiveMarker] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  const onMarkerClick = (props, marker) => {
    setActiveMarker(marker);
    setSelectedPlace(props);
  };

  const onClose = () => {
    setActiveMarker(null);
    setSelectedPlace(null);
  };

  const findNearestLocation = (zipcode) => {
    const geocoder = new props.google.maps.Geocoder();
    const results = [];
  
    geocoder.geocode({ address: zipcode }, (response, status) => {
      if (status === 'OK') {
        const userLocation = response[0].geometry.location;
  
        shobhaLocations.forEach((location) => {
          const lat1 = userLocation.lat();
          const lng1 = userLocation.lng();
          const lat2 = location.lat;
          const lng2 = location.lng;
  
          const radlat1 = Math.PI * lat1 / 180;
          const radlat2 = Math.PI * lat2 / 180;
          const theta = lng1 - lng2;
          const radtheta = Math.PI * theta / 180;
          let distance = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
          
          if (distance > 1) {
            distance = 1;
          }
          
          distance = Math.acos(distance);
          distance = distance * 180 / Math.PI;
          distance = distance * 60 * 1.1515 * 1.609344; // Convert distance to kilometers
  
          if (distance <= 60) {
            results.push({
              ...location,
              distance: distance
            });
          }
        });
  
        setSearchResults(results);
      } else {
        console.error('Geocode was not successful for the following reason:', status);
      }
    });
  };
        

  return (
     <div className="map-wrapper" >
        <h1>Find a Shobha (San Francisco only)</h1>

        <div className='map-search-container'>
            <div className='stores-search-container'>
                <div className="search-container">
                    <input
                    className='zip-input'
                    type="text"
                    placeholder="Enter Zip Code located in San Francisco"
                    onChange={(e) => findNearestLocation(e.target.value)}
                    />
                </div>
                <div className="store-list">
                    {searchResults.length > 0 && (
                    <div>
                        <h3>Stores Near You </h3>
                        <div className='divider'></div>
                        {searchResults.map((location, index) => (
                            <>
                                <div key={index} className='location-info'>
                                    <h4>{location.name}</h4>
                                    <p>{location.address}</p>
                                    <p>Distance: {location.distance.toFixed(2)} km</p>
                                </div>
                                <div className='divider'></div>
                            </>
                        ))}
                    </div>
                    )}
                </div>
            </div>
            <div className='map-container'>
                <Map
                    google={window.google}
                    zoom={10}
                    initialCenter={{ lat: 37.785073500979216, lng: -122.40817153262584 }} 
                    className="map"
                    style={{ width: '40%', height: '80%' }}
                
                >
                    {shobhaLocations.map((location, index) => (
                    <Marker
                        key={index}
                        position={{ lat: location.lat, lng: location.lng }}
                        onClick={onMarkerClick}
                        name={location.name}
                        address={location.address}
                    />
                    ))}
                    
                    <InfoWindow
                    marker={activeMarker}
                    visible={!!activeMarker}
                    onClose={onClose}
                    >
                        <div>
                            <h3>{selectedPlace?.name}</h3>
                            <p>{selectedPlace?.address}</p>
                        </div>
                    </InfoWindow>
                </Map>

            </div>
        </div>
    </div>
  );
}

export default GoogleApiWrapper({
  apiKey: MAP_API_KEY,
})(MapPage);