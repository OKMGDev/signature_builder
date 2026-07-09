import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ padding: '40px 20px', textAlign: 'center' }}>
    <h1>Signature generator not found</h1>
    <p>The client signature you are looking for does not exist.</p>
    <Link to="/">Back to all signatures</Link>
  </div>
);

export default NotFound;
