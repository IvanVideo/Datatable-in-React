import './App.css';
import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Datatable from '../Datatable/Datatable';
import Loader from '../Loader/Loader';
require('es6-promise').polyfill();
require('isomorphic-fetch');

function App() {
  const [data, setData] = useState([]);
  const [q, setQ] = useState('');
  const [loader, setLoader] = useState(false);
  const [loaderError, setLoaderError] = useState(false);

  //запрос REST API при загрузке страницы
  useEffect(() => {
    fetch('https://swapi.dev/api/people/?format=json')
      .then(res => res.json())
      .then((json) => setData(json))
      .then((res) => setLoader(true))
      .catch((err) => {
        setLoaderError(true);
      });
  }, [loader])

  //фильтрация данных по выбранным полям
  const search = (rows) => {
    if (rows.results === undefined) {
      return []
    } else {
      return (rows.results.filter((row) =>
        row.name.toLowerCase().indexOf(q) > -1 ||
        row.mass.toLowerCase().indexOf(q) > -1 ||
        row.gender.toLowerCase().indexOf(q) > -1 ||
        row.hair_color.toLowerCase().indexOf(q) > -1 ||
        row.height.toLowerCase().indexOf(q) > -1 ||
        row.skin_color.toLowerCase().indexOf(q) > -1 ||
        row.eye_color.toLowerCase().indexOf(q) > -1 ||
        row.birth_year.toLowerCase().indexOf(q) > -1
      ))
    }
  }

  return (
    <div>
      <Header />
      {
        loader
          ? <>
            <input
              className='app__input'
              type='text' value={q}
              placeholder='фильтрация по всем полям'
              onChange={(e) => setQ(e.target.value)} />

            <Datatable data={search(data)} />
          </>
          :
          <Loader loaderError={loaderError} />
      }
    </div>
  );
}

export default App;
