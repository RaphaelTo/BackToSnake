import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Layout from '../components/Layout';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';
import Lvl1 from './Lvl1/Lvl1';

import './App.css';

export default function App() {
  return (
     <Layout>
       <Router>
         <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/lvl1">
              <Lvl1 />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
         </Switch>
        </Router>
      </Layout>
  );
}