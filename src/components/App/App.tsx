import React from 'react';
import AllDataProp from '../../data/dataTypes';
import data from '../../data/data.json';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './Main';

const allData = data as AllDataProp;
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Main allData={allData} />} />
          {/* <Route exact path="/career" render={() => <Career />} />
          <Route exact path="/hobby" render={() => <Hobby />} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
