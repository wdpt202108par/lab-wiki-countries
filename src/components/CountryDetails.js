import React, { Component } from "react";
import { Link } from 'react-router-dom';
import json from '../countries.json';

// Countries repository
const countriesRepo = json;
console.log("Voir les Countries",countriesRepo)

const countryDetails = (props) => {
    
    console.log("Voir les Props",props)
   
    const selectedCountry = countriesRepo.find((el) => {
        return el.cca3 === props.match.params.id;
    });

    return(
        <div>
            <h1>{selectedCountry.name.official}</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                  <td style={{width: "30%"}}>Capital</td>
                  <td>{selectedCountry.capital}</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                  {selectedCountry.area} km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                        <li>{selectedCountry.borders}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

export default countryDetails;