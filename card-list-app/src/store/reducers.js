import { SET_CARDS, TOGGLE_FAVORITE, REMOVE_CARD } from './actions';

const initialState = {
    cards: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARDS:
            return { ...state, cards: action.payload };
        case TOGGLE_FAVORITE:
            return {
                ...state,
                cards: state.cards.map(card =>
                    card.id === action.payload ? { ...card, isFavorited: !card.isFavorited } : card
                ),
            };
        case REMOVE_CARD:
            return {
                ...state,
                cards: state.cards.filter(card => card.id !== action.payload),
            };
        default:
            return state;
    }
};

export default reducer;