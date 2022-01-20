import Navbar from "./components/Navbar.js";
import CountriesList from "./components/CountriesList.js"; 
import CountryDetails from "./components/CountryDetails.js";
import countries from "./countries.json";
import { Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList countries={countries}/>
          <Switch>
            <Route path="/:id" component={CountryDetails} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
