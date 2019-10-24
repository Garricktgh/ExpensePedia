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
          <h1>Login</h1>
          <form action="/login" method="POST">
            <p>Username</p>
            <input type="text" name="username"/><br/><br/>
            <p>Password</p>
            <input type="text" name="password"/><br/><br/>
            <input class="btn btn-dark" type="submit" value="Login"/>
          </form>
        </body>
      </Layout>
    )
  }
}

module.exports = New;