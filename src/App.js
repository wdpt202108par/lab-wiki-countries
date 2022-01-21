import React from 'react';
import './App.css';
import jsonCountries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Switch, Route } from 'react-router-dom';


class App extends React.Component {
  state = {
    countries : []
  }

  componentDidMount() {
    console.log('mount : update the App state from [] to [countries from json]');
    this.setState({
      countries: jsonCountries
    })
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        
        <div className='container'>
          <div className="row">
            <CountriesList countries={this.state.countries}/>
            <Switch>
              <Route path='/:cca3' component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

export default App;