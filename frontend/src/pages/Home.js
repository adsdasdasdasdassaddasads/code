// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to lol.lol</h1>
      <p>The Funniest Way to Launch Your Meme Coin!</p>
      <Link to="/create-token" className="btn">Launch Your Meme Coin Now!</Link>
    </div>
  );
};

export default Home;