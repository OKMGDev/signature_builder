import React from 'react';
import { Link } from 'react-router-dom';
import { CLIENTS } from '../clients/registry';
import HomePasswordGate from '../shared/HomePasswordGate';
import './Home.scss';

const Home = () => (
  <HomePasswordGate>
    <div className="home-page">
      <h1>OKMG Signature Generators</h1>
      <p>Select a client to open their email signature generator.</p>
      <ul className="client-list">
        {CLIENTS.map((client) => (
          <li key={client.slug}>
            <Link to={client.route}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </HomePasswordGate>
);

export default Home;
