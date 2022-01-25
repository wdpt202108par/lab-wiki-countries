import './App.css';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <div
            className="col-5"
            style={{ maxHeight: '90vh', overflow: 'auto' }}
          >
            <div className="list-group">
              <CountriesList />
            </div>
          </div>
          <div className="col-7">
            <Switch>
              <Route path="/countries/:id" component={CountryDetails} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
