import React, { Component } from "react";

class Login extends Component {
 render () {
   return (
     <form className="Login">
       <h2>Login</h2>
       <div className="form-group">
         <label htmlFor="email">Username</label>
         <input type="email" className="form-control"
           name="username" />
       </div>
       <div className="form-group">
         <label htmlFor="password">Password</label>
         <input type="password" className="form-control"
           name="password" />
       </div>
       <button type="submit" className="btn btn-primary">
          Login
       </button>
     </form>
   )
 }
}
export default Login;