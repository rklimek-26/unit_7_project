import React, { Component }from 'react';
import {
    NavLink
  } from 'react-router-dom';



  class Header extends Component {

  render(){

      return (

        //Call main-nav
        <nav className="main-nav">
        {/*Your app should display at least 3 default topic links that
        return a list of photos matching some criteria */}
            <ul>
              {/* Render a button to get back to the home page */}
                  <li>
                  <NavLink exact to='/'>Home</NavLink>
                  </li>

                {/* Create 1st default link to Search and
                load 'cat' photos using the performSearch function from App.js */}
                  <li>
                  <NavLink to={'/cats'}>Cats</NavLink>
                  </li>

                {/* Create 2nd default link to Search and
                load 'cat' photos using the performSearch function from App.js */}
                  <li>
                  <NavLink to={'/dogs'}>Dogs</NavLink>
                  </li>
                {/* Create 3rd default link to Search and
                  load 'sunset' photos using the performSearch function from App.js */}
                  <li>
                  <NavLink to={'/sunset'}>Sunsets</NavLink>
                  </li>
            </ul>

        </nav>
      );
   }
 }

export default Header;
