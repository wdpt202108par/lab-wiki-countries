import React from 'react';
import json from '../countries.json';
import { Link } from 'react-router-dom';

const CountriesDetails = (props) => {
  const divStyleCol7 = {
    width: '30%'
  };
  const countrySelect = json.find((el) => { 
    return el.cca3 === props.match.params.cca3 })
    
  return (
    <div className="col-7" style={divStyleCol7}>
      <h1>{countrySelect.name.official}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            
            <td>{countrySelect.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
            {countrySelect.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              {
                countrySelect.borders.map((CCA3) => { 
                  return (
                    <ul key={CCA3}>
                      <Link to={`/countries/${CCA3}`}>
                      {json.find((country) => {
                        return country.cca3 === CCA3
                        }).name.official}
                      </Link>
                    </ul>
                  )
                })
              }
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}

export default CountriesDetails;