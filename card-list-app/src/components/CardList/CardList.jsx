import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card/Card';
import './CardList.css';

const CardList = ({ showLiked }) => {
    const dogs = useSelector(state => state.dogs);
    const filteredDogs = showLiked ? dogs.filter(dog => dog.liked) : dogs;

    return (
        <div className="card-list">
            {filteredDogs.map(dog => (
                <Card key={dog.id} dog={dog} />
            ))}
        </div>
    );
};

export default CardList;
