
const NEW_POST = "NEW_POST";
const NEW_POST_ERROR = "NEW_POST_ERROR";


const initialState = {
  
}

export default function category(state = initialState, action = {}) {
  switch (action.type) {
    case NEW_POST:
    return {
        ...state,
        newPost: action.payload
    }
    break;
    
    case NEW_POST:
    return {
        ...state,
        newPost: []
      }
      break;

    default: return state;
  }

}



export const createPost = (data) => dispatch =>  {
    fetch("http://localhost:3001/post", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json()
    }).then( res => {
      return dispatch ({
        type: NEW_POST,
        payload: res  
      })
    }).catch( error => {
      return dispatch ({
        type: NEW_POST_ERROR,
        payload: error  
      })
    })
  

}

