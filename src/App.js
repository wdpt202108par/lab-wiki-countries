import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React, {Components} from 'react';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <div className="container" >
        
        <div className="row">
        
          <div className="col-5">
            <div className="list-group">
        
            </div>
          </div>

         
          <div className="col-7">
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
