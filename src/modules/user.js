import {URI}  from './constants';

const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
const LOGOUT = "LOGOUT";
const SIGNIN_FAILED = "SIGNIN_FAILED";

const initialState = {
  // user: null
}

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
    return {
      ...state,
      loggedIn: true,
      user: action.payload
    }
    break;

    case LOGOUT:
    return {
      ...state,
      loggedIn: false,
    }
    break;

    case SIGNIN_FAILED:
    return {
      ...state,
      loggedIn: false,
      user: action.payload
    }
    break;

    default: return state;
  }

}


export const signIn = (data) => dispatch =>  {
    fetch(URI+"sign-in", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(function(response) {
      return response.json()
    }).then( res => {
      localStorage.setItem("loggedUser", JSON.stringify(res.data));
      return dispatch ({
        type: SIGNIN_SUCCESS,
        payload: res  
      })
    }).catch( error => {
      return dispatch ({
        type: SIGNIN_FAILED,
        payload: error  
      })
    })
  

}

export const logout = () => dispatch => {
  return dispatch ({
    type: LOGOUT 
  })
}


