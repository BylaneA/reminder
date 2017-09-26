
import React, { Component } from 'react';



class Footer extends Component {
  render() {
    return (
      <footer>

        <div>
      		<ul className="socialNetwork">
      			<li><i className="fa fa-facebook"></i></li>
      			<li><i className="fa fa-linkedin"></i></li>
      			<li><i className="fa fa-instagram"></i></li>
      			<li><i className="fa fa-twitter"></i></li>
      			<li><i className="fa fa-google-plus"></i></li>
      		</ul>
          <p><a href="#">Mentions légales</a></p>
        </div>
      </footer>
        
      
    );
  }
}

export default Footer;