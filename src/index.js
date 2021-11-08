import React from 'react';
import ReactDOM from 'react-dom';
import Page2 from './Components/Page2'
import Page1 from './Components/Page1';
import Counter from './Components/Page3/Counter'
import {Provider } from 'react-redux';
import NavMenu from './Components/NavMenu'
import store from "./Redux/Store/store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import {persistor} from "./Redux/Store/store"


ReactDOM.render(
  <React.StrictMode>
  <PersistGate loading={null} persistor={persistor}>
   <Provider store={store}>
   <Router> 
        <div>
          <NavMenu/>
          <Switch> 
            <Route exact path="/" component={Page1} />
            <Route exact path="/page2" component={Page2} />
            <Route exact path="/page3" component={Counter} />
            <Route  children={() => <h2>Not found</h2>} />
          </Switch> 
        </div>
      </Router>
   </Provider>
  </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
);