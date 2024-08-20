import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, removeDog } from '../../redux/actions';
import './Card.css';

const Card = ({ dog }) => {
    const dispatch = useDispatch();

    return (
        <div className="card">
            <img src={dog.url} alt="Dog" />
            <div className="card-info">

                <button onClick={() => dispatch(toggleLike(dog.id))}>
                    {dog.liked ? '❤️' : '🖤'}
                </button>
                <button onClick={() => dispatch(removeDog(dog.id))}>❌</button>
            </div>

        </div>
    );
};

export default Card;
