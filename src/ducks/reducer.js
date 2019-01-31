import axios from 'axios';
import {apiKey} from '../apiKey';

// constants (action type)
const GET_CHARS = "GET_CHARS",
      GET_SINGLE_CHAR = "GET_SINGLE_CHAR"

// function(action creators)
export function getChars(searchTerm){
  return {
    type: GET_CHARS,
    payload: axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchTerm}&apikey=${apiKey}`)
  }
}
export function getSingleChar(id){
  return {
    type: GET_SINGLE_CHAR,
    payload: axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=${apiKey}`)
  }
}

// state(initialState)
const initialState = {
  characters: [],
  char:{}
}

// reducer:
export default function reducer(state=initialState, action){
  switch(action.type){
    case `${GET_CHARS}_FULFILLED`:
      return {
        ...state,
        characters: action.payload.data.data.results
      }
    case `${GET_SINGLE_CHAR}_FULFILLED`:
      return {
        ...state,
        char: action.payload.data.data.results[0]
      }
    default:
      return state;
  }
}