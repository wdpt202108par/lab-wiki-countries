import React from 'react';
import './App.css';
import countries from './countries.json';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router-dom';


class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Navbar />
        
        <div className='container'>
          <div className="row">
            <CountriesList countries={countries}/>

            <Route path='/:cca3' component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;