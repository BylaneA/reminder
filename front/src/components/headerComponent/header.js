
import React, { Component } from 'react';
import logo from './logotype.svg';
import Connexion from '../../components/pages/connexion';
import Inscription from '../../components/pages/inscription';
import Homepage from '../../components/pages/homePage';

//Router
import { BrowserRouter , Switch, Route, Link } from 'react-router-dom';


class Header extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <header>
          <div>
            <Link to={'/'}><img src={logo} className="App-logo" alt="logo" /></Link>
          </div>
          <div>
            <Link to={'/inscription'}><button className="btn">Inscription</button></Link>
            <Link to={'/connexion'}><button className="btn">Connexion</button></Link>
          </div>
          </header>
          <Switch>
              <Route exact={true} path='/' component={Homepage} />
              <Route path='/inscription' component={Inscription} />
              <Route path='/connexion' component={Connexion} />
          </Switch>
          </div>
        </BrowserRouter>

        );
    }
}

export default Header;