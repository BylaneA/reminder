import React, { Component } from 'react';
import AddPost from '../../components/pages/addPost';

//Router
import { Route, Link } from 'react-router-dom';


class Dashboard2 extends Component {
  render() {
    return (

      <div className="mainDashboard">

        <div className="post-it1">
            <p className="msg-date">27/09/2017</p>
            <p className="msg-title">TO DO LIST</p>
            <p className="msg-text">Blah blah blah</p>
        </div>

      	<div className="post-it">
      		<Link to="/addPost">
      			<i className="fa fa-plus"></i>
      		</Link>
      	</div>

		<div className="triangles">
			<div className="redTriangle">
			</div>
        </div>

      </div>
        
      
    );
  }
}

export default Dashboard2;