import React from "react";
import Country from "./Country.js"
import countries from "../countries.json";
import "bootstrap/dist/css/bootstrap.css";

class CountriesList extends React.Component {
  state = {
    countries: countries
  }

  render() {
    const style = {
      maxHeight: "90vh",
      overflow: "scroll"
    }

    return (
      <div className="col-5" style={style}>
        {this.state.countries.map(country => <Country key={country.cca3} id={country.cca3} flag={country.flag} name={country.name.common} />)}
      </div>
    );
  }
}

export default CountriesList;