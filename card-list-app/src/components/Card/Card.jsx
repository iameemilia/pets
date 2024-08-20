import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleFavorite, removeCard } from '../../store/actions';
import './Card.css'; // Добавьте стили

const Card = ({ card }) => {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <img src={card.url} alt="dog" />
            <div className="card-info">
                <button onClick={() => dispatch(toggleFavorite(card.id))}>
                    {card.isFavorited ? '❤️' : '🖤'}
                </button>
                <button onClick={() => dispatch(removeCard(card.id))}>🗑️</button>
            </div>
        </div>
    );
};

export default Card;