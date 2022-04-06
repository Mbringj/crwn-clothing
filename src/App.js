import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import { Switch, Route, Link } from 'react-router-dom';

const Product = () => {
  return (
    <h1>product page</h1>
  );
};

class App extends React.Component {
  constructor(props){
     super(props);
  } 
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/product'>
            <Product />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
