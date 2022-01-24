// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './Components/CountriesList'
import CountriesDetails from './Components/CountriesDetails'

function App() {
  const divStyleCol5 = {
    maxHeight: '90vh',
    overflow: 'scroll'
  };
  
  const divStyleCol7 = {
    width: '30%'
  };

  return (
    <div className="App">
      <NavBar />
      <div className="container" >
        <div className="row">
          <div className="col-5" style={divStyleCol5}>
            <div className="list-group">
              <CountriesList />
            </div>
          </div>
          <div className="col-7" style={divStyleCol7}>
            <Switch>
              <Route exact path="/countries/:cca3" component={CountriesDetails} /> 
            </Switch>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
