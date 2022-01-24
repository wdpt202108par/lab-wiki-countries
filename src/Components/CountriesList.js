import React, {Component} from 'react'
import { Link } from 'react-router-dom';

class CountriesList extends Component {
  render () {
    return (
      <>
        {this.props.countries.map((country) => { 
          return (
            <div key={country.alpha3Code}>
              <Link to={`/countries/${country.alpha3Code}`}>{country.flag} {country.name}</Link>
            </div>
          )
        })}
      </>
    )
  }   
}

export default CountriesList