import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import YelpSearch from './YelpSearch';
import YelpGallery from './YelpGallery';


class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="main">
        <Header loggedInUser = {this.props.loggedInUser} />
        <div id="banner">
          <div id="tagline">
            Explore the world with your trippy trippy mates
          </div>
          <Link to="/createTrip"><button id="mainCTA">Create a trip</button></Link>
        </div>
        <div id="galleryHeader">
          <h2>Popular adventures</h2>
        </div>
        <YelpGallery />
      </div>
    )
  }
}

export default Home;
