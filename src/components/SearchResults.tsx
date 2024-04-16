import { useContext, useState } from 'react';
import { MapContext, PlacesContext } from '../context';
import { Feature } from '../interfaces/places';

export const SearchResults = () => {
  const { places, isLoadingPlaces , userLocation} = useContext(PlacesContext);
  const { map, getRouteBetweenPoints } = useContext(MapContext);

  const [activePlaceId, setActivePlaceId] = useState('');

  const onPlaceClicked = (place: Feature) => {
    const [lng, lat] = place.center;
    setActivePlaceId(place.id);
    map?.flyTo({ zoom: 14, center: [lng, lat] });
  };

  const getRoute = (place: Feature) => {

    if (!userLocation) return; 
    const [lng, lat] = place.center;
    
    getRouteBetweenPoints(userLocation,  [lng, lat]);

  } ;
    
  

  return (
    <ul className='list-group mt-3'>
      {isLoadingPlaces ? (
        <p>Buscando...</p>
      ) : (
        places.map((place) => (
          <li
            key={place.id}
            className={`list-group-item list-group-item-action pointer ${activePlaceId === place.id && 'active'}`}
            onClick={() => onPlaceClicked(place)}>
            <h6>{place.text}</h6>
            <p
              className='text-muted'
              style={{ fontSize: '12px' }}>
              {place.place_name}
            </p>
            <button
              onClick={() => getRoute(place)}
              className={`btn  btn-sm ${activePlaceId === place.id ? 'btn-outline-light' : 'btn-outline-primary'}`}>
              Direcciones
            </button>
          </li>
        ))
      )}
    </ul>
  );
}