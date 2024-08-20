import React from 'react';
import { useDispatch } from 'react-redux';

const FilterButton = ({ showFavorites, setShowFavorites }) => {
    const dispatch = useDispatch();

    const handleClick = () => {
        setShowFavorites(!showFavorites);
    };

    return (
        <button onClick={handleClick}>
            {showFavorites ? 'Показать все' : 'Показать только избранные'}
        </button>
    );
};

export default FilterButton;