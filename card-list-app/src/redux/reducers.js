import { ADD_DOGS, TOGGLE_LIKE, REMOVE_DOG } from './actions';

const initialState = {
    dogs: [],
    likedDogs: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DOGS:
            return { ...state, dogs: action.payload };
        case TOGGLE_LIKE:
            return {
                ...state,
                dogs: state.dogs.map(dog =>
                    dog.id === action.payload ? { ...dog, liked: !dog.liked } : dog)
            };
        case REMOVE_DOG:
            return {
                ...state,
                dogs: state.dogs.filter(dog => dog.id !== action.payload)
            };
        default:
            return state;
    }
};

export default reducer;
