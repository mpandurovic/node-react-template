import React from 'react';
import { Link } from "react-router-dom";

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Link to="/signup">Signup</Link>
      </div>
    );
  }
}

export default Dashboard;