import { PlacesState } from "./PlacesProvider";
import { Feature } from "../../interfaces/places";


type PlacesAction = { type: 'setUserLocation', payload: [number, number]; } | { type: "setLoandingPlaces"; } | { type: 'setPlaces', payload: Feature[]; };


export const placesReducer = (state: PlacesState, action: PlacesAction): PlacesState => {
  switch (action.type) {
    case 'setUserLocation':
      return {
        ...state,
        isLoading: false,
        userLocation: action.payload
      };

    case "setLoandingPlaces":
      return { ...state, isLoadingPlaces: true, places: [] };

    case 'setPlaces':
      return {
        ...state,
        isLoadingPlaces: false,
        places: action.payload
      };
  }



  return {


  } as PlacesState;

};