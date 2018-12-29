import {URI}  from './constants';

const NEW_POST = "NEW_POST";
const NEW_POST_ERROR = "NEW_POST_ERROR";
const POSTS_FETCH = "POSTS_FETCH";
const POSTS_FETCH_FAILED = "POSTS_FETCH_FAILED";
const POST_FETCH = "POST_FETCH";
const POST_FETCH_FAILED = "POST_FETCH_FAILED";
// const POSTS_CATEGORY_FETCH = "POSTS_CATEGORY_FETCH";
// const POSTS_CATEGORY_FETCH_FAILED = "POSTS_CATEGORY_FETCH_FAILED";


const initialState = {
  posts:[]
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
     
      case POSTS_FETCH:
      return {
          ...state,
          posts: action.payload
      }
      break;

      case POSTS_FETCH_FAILED:
      return {
          ...state,
          posts: []
      }
      break;

      case POST_FETCH:
      return {
          ...state,
          postDetails: action.payload
      }
      break;

      case POST_FETCH_FAILED:
      return {
          ...state,
          postDetails: []
      }
      break;

    default: return state;
  }

}



export const createPost = (data) => dispatch =>  {
    fetch(URI+"post", {
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


export const fetchPosts = (limit = 10, offset = 0) => dispatch =>  {
  fetch(URI+"posts/all/"+limit+"/"+offset).then(function(response) {
      return response.json()
    }).then( res => {
      return dispatch ({
      type: POSTS_FETCH,
      payload: res.data
    })
  }).catch( error => {
    return dispatch ({
      type: POSTS_FETCH_FAILED
    })
  })

}

export const fetchCategoryPosts = (id, limit = 10, offset = 0) => dispatch =>  {
  fetch(URI+"posts/category/"+id+"/"+limit+"/"+offset).then(function(response) {
      return response.json()
    }).then( res => {
      return dispatch ({
      type: POSTS_FETCH,
      payload: res.data
    })
  }).catch( error => {
    return dispatch ({
      type: POSTS_FETCH_FAILED
    })
  })

}



export const fetchTagPosts = (tag, limit = 10, offset = 0) => dispatch =>  {
  fetch(URI+"posts/tag/"+tag+"/"+limit+"/"+offset).then(function(response) {
      return response.json()
    }).then( res => {
      return dispatch ({
      type: POSTS_FETCH,
      payload: res.data
    })
  }).catch( error => {
    return dispatch ({
      type: POSTS_FETCH_FAILED
    })
  })

}


export const fetchPostDetails = (id) => dispatch =>  {
  fetch(URI+"post/"+id).then(function(response) {
      return response.json()
    }).then( res => {
      return dispatch ({
      type: POST_FETCH,
      payload: res.data
    })
  }).catch( error => {
    return dispatch ({
      type: POST_FETCH_FAILED
    })
  })

}