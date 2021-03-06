import React, { Component } from "react";
import { Link } from "react-router";
import helpers from "../utils/helpers";

var style = {
  backgroundColor: "white",
  padding: "20px",
  outlineColor: "black",
  outlineStyle: "solid"
};

class Form extends Component {

state = {
  username: "",
  password: ""
};

handleInputChange = (event) => {
  const name = event.target.name;
  const value = event.target.value;
  this.setState({
    [name]: value
  });
};

handleSubmit = (event) => {
  event.preventDefault();
  helpers.saveUser({
    username: this.state.username,
    password: this.state.password
  }).then((resp) => {
    console.log(this.state);
    console.log("Account Saved");
    window.location.href="/";
    
  })

};

 render () {
   return (
     <div className="container" style={ style }>
       <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link to="/"><p className="navbar-brand">Chore Tracker</p></Link>  
          </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
                <Link to="/Login"><button type="button" className="btn btn-default navbar-btn">Login</button></Link>
            </ul>          
          </div>

        </div>
      </nav>

      <form className="RegisterForm">
        <h2>Sign up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" 
                  className="form-control"
                  name="username"
                  onChange={this.handleInputChange}
                  required
                />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" 
                  className="form-control"
                  name="password"
                  onChange={this.handleInputChange}
                  required
                />
        </div>
        <p type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}>
            Sign up
        </p>
      </form>
     </div>
   )
 }
}
export default Form;