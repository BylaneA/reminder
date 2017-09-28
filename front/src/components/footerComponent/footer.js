
import React, { Component } from 'react';



class Footer extends Component {
  render() {
    return (
      <footer>
        <div><p>© Les Poussins métalleux </p></div>
        <div><p><a href="/">Mentions légales</a></p></div>
        <div>
      		<ul className="socialNetwork">
      			<li><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></li>
      			<li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin"></i></a></li>
      			<li><a href="https://www.instagram.com/"><i className="fa fa-instagram"></i></a></li>
      			<li><a href="https://www.twitter.com/"><i className="fa fa-twitter"></i></a></li>
      			<li><a href="https://www.plus.google.com/"><i className="fa fa-google-plus"></i></a></li>
      		</ul>
          
        </div>
      </footer>
        
      
    );
  }
}

export default Footer;