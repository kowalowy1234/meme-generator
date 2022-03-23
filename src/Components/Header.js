import React from 'react';
import trollface from '../Images/troll-face.png';

function Header() {
  return(
    <header>
      <img src={trollface} alt='' />
      <h1>Meme Generator</h1>
      <p>React Course - Project 3</p>
    </header>
  );
}

export default Header;