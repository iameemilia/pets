import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import CardList from './components/CardList/CardList';
import FilterButton from './components/FilterButton/FilterButton';
import './App.css'; // Добавьте стили

const App = () => {
  const [showFavorites, setShowFavorites] = useState(false);

  return (
    <Provider store={store}>
      <div className="app">
        <h1>Dog Gallery</h1>
        <FilterButton showFavorites={showFavorites} setShowFavorites={setShowFavorites} />
        <CardList showFavorites={showFavorites} />
      </div>
    </Provider>
  );
};

export default App;