import React, { useEffect, useState } from 'react';

const AUTH_KEY = 'okmg_home_auth';

const HomePasswordGate = ({ children }) => {
  const expectedPassword = process.env.REACT_APP_HOME_PASSWORD;
  const [isAuthed, setIsAuthed] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!expectedPassword) {
      setIsAuthed(true);
      return;
    }

    if (sessionStorage.getItem(AUTH_KEY) === '1') {
      setIsAuthed(true);
    }
  }, [expectedPassword]);

  if (!expectedPassword || isAuthed) {
    return children;
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === expectedPassword) {
      sessionStorage.setItem(AUTH_KEY, '1');
      setIsAuthed(true);
      setError('');
      return;
    }

    setError('Incorrect password');
  };

  return (
    <div className="home-password-gate">
      <form className="home-password-form" onSubmit={handleSubmit}>
        <h1>OKMG Signature Generators</h1>
        <p>Enter the password to view available clients.</p>
        <label htmlFor="home-password">Password</label>
        <input
          id="home-password"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
        {error && <p className="home-password-error">{error}</p>}
        <button type="submit">Continue</button>
      </form>
    </div>
  );
};

export default HomePasswordGate;
