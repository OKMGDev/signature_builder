import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { CLIENTS } from '../clients/registry';
import HomePasswordGate from '../shared/HomePasswordGate';
import './Home.scss';

const Home = () => {
  const [query, setQuery] = useState('');

  const filteredClients = useMemo(() => {
    const normalised = query.trim().toLowerCase();
    if (!normalised) return CLIENTS;

    return CLIENTS.filter((client) =>
      client.name.toLowerCase().includes(normalised) ||
      client.slug.toLowerCase().includes(normalised)
    );
  }, [query]);

  return (
    <HomePasswordGate>
      <div className="home-page">
        <h1>OKMG Signature Generators</h1>
        <p>Select a client to open their email signature generator.</p>

        <div className="client-search">
          <label htmlFor="client-search" className="visually-hidden">Search clients</label>
          <input
            id="client-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search clients…"
            autoComplete="off"
          />
        </div>

        {filteredClients.length === 0 ? (
          <p className="client-empty">No clients match “{query.trim()}”.</p>
        ) : (
          <ul className="client-list">
            {filteredClients.map((client) => (
              <li key={client.slug}>
                <Link to={client.route}>
                  <span className="client-logo">
                    <img src={client.logoUrl} alt="" />
                  </span>
                  <span className="client-name">{client.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </HomePasswordGate>
  );
};

export default Home;
