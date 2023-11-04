import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import { Switch, Route, Link } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth } from './firebase/firebase.utils';
import './App.css';
class App extends React.Component {
  constructor(props){
     super(props);

     this.state = {
       currentUser: null
     };
  }

  unSubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }
  
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <span>hello new user</span>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/'>
            <Homepage />
          </Route>
          <Route exact path='/signin'>
            <SignInAndSignUp />
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
