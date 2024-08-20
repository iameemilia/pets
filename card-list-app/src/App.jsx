import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addDogs } from './redux/actions';
import CardList from './components/CardList/CardList';
import FilterButton from './components/FilterButton/FilterButton';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      const response = await axios.get('https://api.thedogapi.com/v1/images/search?limit=10');
      const dogs = response.data.map(dog => ({ id: dog.id, url: dog.url, liked: false, breed: 'Bengal' }));
      dispatch(addDogs(dogs));
    };

    fetchDogs();
  }, [dispatch]);

  const toggleShowLiked = () => {
    setShowLiked(prev => !prev);
  };

  return (
    <div className="App">
      <h1>Dog Gallery</h1>
      <FilterButton toggleShowLiked={toggleShowLiked} showLiked={showLiked} />
      <CardList showLiked={showLiked} />
    </div>
  );
};

export default App;
