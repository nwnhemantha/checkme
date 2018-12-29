import {URI}  from './constants';

const FETCH_TAGS = "FETCH_TAGS";
const FETCH_TAG_FAILED = "FETCH_TAG_FAILED";
const GET_TAG_ID = "GET_TAG_ID";
const REMOVE_TAG_ID = "REMOVE_TAG_ID";

const initialState = {
  tag: null
}

export default function tags(state = initialState, action = {}) {
  switch (action.type) {
    case FETCH_TAGS:
    return {
        ...state,
        tags: action.payload
    }
    break;
    
    case FETCH_TAG_FAILED:
    return {
        ...state,
        tags: []
      }
      break;
    case GET_TAG_ID:
    return {
        ...state,
        tag: action.payload
      }
      break;

      case REMOVE_TAG_ID:
      return {
          ...state,
          tag: action.payload
        }
        break;
    default: return state;
  }

}


export const fetchTags = () => dispatch =>  {
    fetch(URI+"tags").then(function(response) {
        return response.json()
      }).then( res => {
        return dispatch ({
        type: FETCH_TAGS,
        payload: res.data
      })
    }).catch( error => {
      return dispatch ({
        type: FETCH_TAG_FAILED
      })
    })
  
}



export const selectTag = (tag) => dispatch =>  {
  return dispatch ({
    type: GET_TAG_ID,
    payload: tag
  })

}

export const unSelectTag = () => dispatch =>  {
  return dispatch ({
    type: REMOVE_TAG_ID,
    payload: null
  })

}