import React from 'react';
import { Link } from 'react-router-dom';
const Landing = () => {
  return(
    <Link to={'/sort'}>
      <button style={{backgroundColor: '#000'}}>sort</button>
    </Link>
  )
}

export default Landing;