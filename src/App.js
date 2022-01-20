import React from "react";
import Navbar from "./components/Navbar.js";
import CountriesList from "./components/CountriesList.js"; 
import CountryDetails from "./components/CountryDetails.js";
import countries from "./countries.json";
import { Switch, Route } from "react-router-dom";
import './App.css';

class App extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    this.setState({
      countries: countries
    })
    // fetch('https://restcountries.eu/#api-endpoints-all').then(response => response.json())
    //   .then((data) => {
    //     this.setState({
    //       countries: data
    //     })
    //   })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <CountriesList countries={this.state.countries}/>
            <Switch>
              <Route path="/:id" render={(routerProps) => <CountryDetails {...routerProps} countries={this.state.countries} />} />
            </Switch>
          </div>
        </div>
      </div>
    )
  ;}
}

export default App;
