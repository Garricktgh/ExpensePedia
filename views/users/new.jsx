const React = require('react');
const Layout = require('../layout');
const NavLogin = require('../nav-login');

class New extends React.Component {
  render(){

    return(
      <Layout>
        <NavLogin>
        </NavLogin>
        <body>
          <h1>Register</h1> 
          <div className="card text-white bg-dark mb-3">
            <form action="/register" method="POST">
              <p>Username</p>
              <input type="text" name="username" required/><br/><br/>
              <p>Password</p>
              <input type="text" name="password" required/><br/><br/>
              <p>Name</p>
              <input type="text" name="name" required/><br/><br/>
              <p>Email</p>
              <input type="text" name="email" required/><br/><br/>
              <input class="btn btn-secondary" type="submit" value="Create"/>
            </form> 
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = New;