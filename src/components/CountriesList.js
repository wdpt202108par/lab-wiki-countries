import React from "react";
import Country from "./Country.js"
import "bootstrap/dist/css/bootstrap.css";

class CountriesList extends React.Component {
  render() {
    const style = {
      maxHeight: "90vh",
      overflow: "scroll"
    }

    return (
      <div className="col-5" style={style}>
        {this.props.countries.map(country => <Country key={country.cca3} id={country.cca3} flag={country.flag} name={country.name.common} />)}
      </div>
    );
  }
}

export default CountriesList;