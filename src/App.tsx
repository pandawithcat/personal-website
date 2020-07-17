import React from 'react';
import AllDataProp from './data/dataTypes';
import data from './data/data.json';
import { Switch, Route, HashRouter } from 'react-router-dom';
import Main from './components/App/Main';

const allData = data as AllDataProp;
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Main allData={allData} />} />
          {/* <Route exact path="/career" render={() => <Career />} />
          <Route exact path="/hobby" render={() => <Hobby />} /> */}
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
