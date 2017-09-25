
import React, { Component } from 'react';
import logo from './logotype.svg';
class Header extends Component {
  render() {
    return (
      <header>

        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <nav>
        	<ul>
        		<li>
        			<a href="#">Inscription</a>
        		</li>
        		<li>
        			<a href="#">Connexion</a>
        		</li>
        	</ul>
        </nav>

      </header>
        
      
    );
  }
}

export default Header;