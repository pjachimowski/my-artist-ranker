import React, { } from 'react';
import YouRanked from './YouRanked';
import NavbarLinks from './NavbarLinks';

const Header = () => {
  return (
    <div className="header">
      <NavbarLinks />
      <h1>Welcome to</h1> <h2>my Artists Ranking App</h2>
      <YouRanked  />
      {/* <YouRanked artists={props.artists} /> */}
    </div>
  );
}

// Header.propTypes = {
//   players: React.PropTypes.array.isRequired,
// };

export default Header;