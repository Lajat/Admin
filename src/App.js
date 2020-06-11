
import Admin from './admin';

import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter,Route, Switch, Redirect} from 'react-router-dom';
import Users from './Users';
import AddUser from './CreateUser'
import EditUser from './EditUser'
import Category from './Category';
import AddCategory from './AddCategory'
import EditCategory from './EditCategory'

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
        <Route path="/admin" component={Users} />
        <Route path="/AddUser" component={AddUser} />
        <Route path="/cat" component={Category} />
        <Route path="/EditUser" component={EditUser} />
        <Route path="/AddCategory"component={AddCategory}/>
        <Route path="/EditCategory"component={EditCategory}/>
        <Route path="" component={Admin} />

        
        </Switch>
      </div>
      </BrowserRouter>
    )
  }
}

export default App

