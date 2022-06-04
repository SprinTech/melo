import React from 'react';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='reset-container'>
    <Alert id="not-found" className="center" variant="danger">
      <h2>Error 404</h2>
      <p>This page doesn't exist</p>
      <Link to="/">Back to home</Link>
    </Alert>
    </div>
  );
}

export default NotFound;
