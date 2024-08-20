export const SET_CARDS = 'SET_CARDS';
export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const REMOVE_CARD = 'REMOVE_CARD';

export const setCards = (cards) => ({
    type: SET_CARDS,
    payload: cards,
});

export const toggleFavorite = (id) => ({
    type: TOGGLE_FAVORITE,
    payload: id,
});

export const removeCard = (id) => ({
    type: REMOVE_CARD,
    payload: id,
});