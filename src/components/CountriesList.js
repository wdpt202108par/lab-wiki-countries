import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';


const CountriesList = () => {
  return(
    <>
      <div className="col-5" style={{maxHeight: "90vh", overflow:"scroll"}}>
        {countries.map(country => {
          return (
            <div key={`${country.cca3}`} >
              <div className="list-group">
                <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">{country.flag} {country.name.common}</Link>
              </div>
            </div>
          )
        })};
      </div>
    </>  
  )
}

export default CountriesList;