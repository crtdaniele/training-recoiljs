import React, { Suspense } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Layout/Header/Header'
import Home from './components/Home/Home'

const App = () => {

  const Todos = React.lazy(() => import('./components/Todos/Todos'))

  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/todos" exact>
          <Suspense fallback="Loading...">
            <Todos></Todos>
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
