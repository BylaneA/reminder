import React, { Component } from 'react';
import AddPost from '../../components/pages/addPost';

//Router
import { Route, Link } from 'react-router-dom';


class Dashboard extends Component {
  render() {
    return (

      <div className="mainDashboard">
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

export default Dashboard;