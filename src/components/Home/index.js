import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

// Here is the home page of our application

const Home = () => (
  <div id="inner">
    <h1>Welcome to our Gym App!</h1>
    <h2>Here you can view our Fitness Classes Schedule,
      book a Personal Training Session and 
      visit our Store</h2>

      {/* <Link to="../PersonalTrainer">
        <img src="personalTrainer.jpg" style={{width: '40%', height: '30%'}} />
      </Link>
      <Link to="../Classes">
        <img src="fitnessClass.jpg" style={{width: '30%', height: '30%'}} />
      </Link>
      <Link to="../Store">
        <img src="store.jpg" style={{width: '20%', height: '30%'}}/>
      </Link> */}
  </div>
);

export default Home;