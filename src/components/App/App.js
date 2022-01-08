import './App.css';
import React, { useState, useEffect } from 'react';
import Datatable from '../Datatable/Datatable';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');

  useEffect(() => {
    fetch('https://swapi.dev/api/people/?format=json')
      .then(res => res.json())
      .then((json) => setData(json))
  }, [])

  function search(rows) {
    if (rows.results === undefined) {
      return []
    } else {
      // const columns = Object.keys(rows.results[0])
      return (rows.results.filter((row) =>
        row.name.toLowerCase().indexOf(q) > -1 ||
        row.mass.toLowerCase().indexOf(q) > -1 ||
        row.gender.toLowerCase().indexOf(q) > -1 ||
        row.hair_color.toLowerCase().indexOf(q) > -1 ||
        row.height.toLowerCase().indexOf(q) > -1 ||
        row.skin_color.toLowerCase().indexOf(q) > -1 ||
        row.eye_color.toLowerCase().indexOf(q) > -1 ||
        row.birth_year.toLowerCase().indexOf(q) > -1
      )
      )
    }
  }

  return (
    <div>
      <input type='text' value={q} onChange={(e) => setQ(e.target.value)} />
      <Datatable data={search(data)} />
    </div>
  );
}

export default App;
