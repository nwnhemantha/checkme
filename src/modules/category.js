import {URI}  from './constants';

const FETCH_ALL = "FETCH_ALL";
const FETCH_FAILED = "FETCH_FAILED";
const GET_CAT_ID = "GET_CAT_ID";
const REMOVE_CAT_ID = "REMOVE_CAT_ID";

const initialState = {
  categoryId: null
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

    case GET_CAT_ID:
    return {
        ...state,
        categoryId: action.payload
      }
      break;

    case REMOVE_CAT_ID:
    return {
        ...state,
        categoryId: action.payload
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


export const selectCategory = (id) => dispatch =>  {
  return dispatch ({
    type: GET_CAT_ID,
    payload: id
  })

}

export const unSelectCategory = () => dispatch =>  {
  return dispatch ({
    type: GET_CAT_ID,
    payload: null
  })

}
