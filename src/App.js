import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import './App.css';
class App extends React.Component {
  constructor(props){
     super(props);
  } 
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/about'>
            <About />
          </Route>
          <Route exact path='/shop'>
            <ShopPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
