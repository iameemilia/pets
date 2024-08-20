export const ADD_DOGS = 'ADD_DOGS';
export const TOGGLE_LIKE = 'TOGGLE_LIKE';
export const REMOVE_DOG = 'REMOVE_DOG';

export const addDogs = (dogs) => ({ type: ADD_DOGS, payload: dogs });
export const toggleLike = (id) => ({ type: TOGGLE_LIKE, payload: id });
export const removeDog = (id) => ({ type: REMOVE_DOG, payload: id });
