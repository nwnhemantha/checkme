import {URI}  from './constants';

const FETCH_ALL = "FETCH_ALL";
const FETCH_FAILED = "FETCH_FAILED";

const initialState = {
  
}

export default function category(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_ALL:
    return {
        ...state,
        categories: action.payload
    }
    break;
    
    case FETCH_FAILED:
    return {
        ...state,
        categories: []
      }
      break;

    default: return state;
  }

}


export const fetchCategories = () => dispatch =>  {
    fetch(URI+"categories").then(function(response) {
        return response.json()
      }).then( res => {
        return dispatch ({
        type: FETCH_ALL,
        payload: res.data
      })
    }).catch( error => {
      return dispatch ({
        type: FETCH_FAILED
      })
    })
  
}


