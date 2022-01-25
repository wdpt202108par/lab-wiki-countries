import React from 'react';
import { Link } from 'react-router-dom';
import json from '../countries.json';

// Countries repository
const countriesRepo = json;

const countriesList = () => {
  return (
    <div>
      {countriesRepo.map((eachCountry, index) => {
        return (
          <div key={eachCountry.cca3}>
            <p>
              <Link to={`/countries/${eachCountry.cca3}`}>
                {eachCountry.name.official}
              </Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default countriesList;
