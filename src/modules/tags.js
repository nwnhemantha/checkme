
const FETCH_TAGS = "FETCH_TAGS";
const FETCH_TAG_FAILED = "FETCH_TAG_FAILED";

const initialState = {
  
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

    default: return state;
  }

}


export const fetchTags = () => dispatch =>  {
    fetch("http://localhost:3001/tags").then(function(response) {
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


