import {Route, BrowserRouter as Router} from "react-router-dom";

import Druga from './Components/DrugaSt';
import './App.css';
import React from 'react';
import Prva from './Components/Prva';
import Treca from './Components/Treca';

function App() {
  return (
    <div className="App">
     
     <Router>
     <Route path="/druga"component={Druga}></Route>
     <Route exact path="/" component={Prva}></Route>
     <Route path="/treca"component={Treca}></Route>
     
     </Router>
     
    ​
  
    </div>
  );
}

export default App;
