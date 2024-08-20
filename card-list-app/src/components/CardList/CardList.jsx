import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Card from '../Card/Card';
import { setCards } from '../../store/actions';
import './CardList.css'; // Добавьте стили

const CardList = () => {
    const dispatch = useDispatch();
    const cards = useSelector(state => state.cards);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.thedogapi.com/v1/images/search?limit=10');
                const formattedData = response.data.map(item => ({
                    id: item.id,
                    url: item.url,
                    isFavorited: false,
                }));
                dispatch(setCards(formattedData));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div className="card-list">
            {cards.map(card => <Card key={card.id} card={card} />)}
        </div>
    );
};

export default CardList;
