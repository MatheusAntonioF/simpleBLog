import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import DeleteUser from './pages/DeleteUser';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/home" exact component={Main} />
        <Route path="/home/create-new-post" component={CreatePost} />
        <Route path="/home/delete-user" component={DeleteUser} />
      </Switch>
    </BrowserRouter>
  );
}
