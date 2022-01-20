import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

class CountryDetails extends React.Component {
  getCountryDetails = (countryId) => {
    return this.props.countries.find(country => country.cca3 === countryId);
  }

  render() {
    const style = {
      width: "30%"
    }

    const country = this.getCountryDetails(this.props.match.params.id);

    if (!country) return 'loading...' 

    return (
      <div className="col-7">
        <h1>{country.name.common}</h1>
        <table className="table">
          <thead></thead>
          <tbody>
            <tr>
              <td style={style}>Capital</td>
              <td>{country.capital}</td>
            </tr>
            <tr>
              <td>Area</td>
              <td>
                {country.area} km
                <sup>2</sup>
              </td>
            </tr>
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {country.borders.map(borderId => <li key={borderId}><Link to={`/${borderId}`}>{this.getCountryDetails(borderId).name.common}</Link></li>)}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;