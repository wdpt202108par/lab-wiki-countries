// import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './Components/CountriesList'

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

            <Switch>
              <Route exact path="/" component={CountriesList} /> 
            </Switch>

            </div>
          </div>

         
          <div className="col-7" style={divStyleCol7}>
            <h1>France</h1>
            <table className="table">
              <thead></thead>
              <tbody>
                <tr>
                 
                  <td>Paris</td>
                </tr>
                <tr>
                  <td>Area</td>
                  <td>
                    551695 km
                    <sup>2</sup>
                  </td>
                </tr>
                <tr>
                  <td>Borders</td>
                  <td>
                    <ul>
                      <li><a href="/AND">Andorra</a></li>
                      <li><a href="/BEL">Belgium</a></li>
                      <li><a href="/DEU">Germany</a></li>
                      <li><a href="/ITA">Italy</a></li>
                      <li><a href="/LUX">Luxembourg</a></li>
                      <li><a href="/MCO">Monaco</a></li>
                      <li><a href="/ESP">Spain</a></li>
                      <li><a href="/CHE">Switzerland</a></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
