import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import json from '../countries.json'

class CountriesList extends Component {
  state = {
    countries: json
  }

  render () {
    return (
      <>
        {this.state.countries.map((country) => { 
          return (
            <div key={country.ccn3}>
              <Link to={`/countries/${country.ccn3}`}>{country.name.official}</Link>
          </div>
          )
        })}
      </>
    )
  }   
}

export default CountriesList