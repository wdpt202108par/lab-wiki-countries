import React from 'react';
import countries from '../countries.json';
import {Link} from 'react-router-dom';

const CountryDetails = (props) => {

  const specificCountry = countries.find(country => {
    return country.cca3 === props.match.params.cca3;
  });

  

  return (      
    <div className="col-7">
        <h1>{specificCountry.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={{width: "30%"}}>Capital</td>
                <td>{specificCountry.capital}</td>
            </tr>
            <tr>
                <td>Area</td>
                  <td>
                    {specificCountry.area} km
                    <sup>2</sup>
                  </td>
            </tr>
            <tr>
                <td>Borders</td>
                  <td>
                  {specificCountry.borders.map(border => {
                    return (
                      <ul key={border}>
                        <li>
                          <Link to={`/${border}`}>
                            {countries.find(country => country.cca3 === border).name.common}
                          </Link>
                        </li>
                      </ul>
                    )
                    })} 
                </td>
            </tr>
          </tbody>
          </table>
    </div>         
  )
}

export default CountryDetails;