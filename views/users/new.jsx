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
              <input type="text" name="username"/><br/><br/>
              <p>Password</p>
              <input type="text" name="password"/><br/><br/>
              <p>Name</p>
              <input type="text" name="name"/><br/><br/>
              <p>Email</p>
              <input type="text" name="email"/><br/><br/>
              <input class="btn btn-secondary" type="submit" value="create account"/>
            </form> 
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = New;