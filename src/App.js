import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import CountriesList from './Components/CountriesList';
import CountriesDetails from './Components/CountriesDetails';
// import json from './countries.json';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: []
  }

  updateDataFromAPI = () => {
    axios
      .get(
        `http://api.countrylayer.com/v2/all?access_key=${process.env.REACT_APP_API_KEY}`
      )
      .then((response) => {
        console.log('App.js => countries array', response.data)

        this.setState({
          countries: response.data
        })   
      })
      .catch((err) => console.log("error", err))
  }

  componentDidMount = () => {
    this.updateDataFromAPI()
  }

  render () {
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
                <CountriesList countries={this.state.countries}/>
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
}

export default App;
