import React from 'react';
import './FilterButton.css';

const FilterButton = ({ toggleShowLiked, showLiked }) => {
    return (
        <button onClick={toggleShowLiked} className="filter-button">
            {showLiked ? 'Показать все' : 'Показать только избранные'}
        </button>
    );
};

export default FilterButton;
