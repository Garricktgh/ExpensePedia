const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class New extends React.Component {
  render(){

    return(
      <Layout>
        <Nav>
        </Nav>
        <body>
          <h1>Register</h1>
          <form action="/register" method="POST">
            <p>Username</p>
            <input type="text" name="username"/><br/><br/>
            <p>Password</p>
            <input type="text" name="password"/><br/><br/>
            <p>Name</p>
            <input type="text" name="name"/><br/><br/>
            <p>Email</p>
            <input type="text" name="email"/><br/><br/>
            <input type="submit" value="create account"/>
          </form>
        </body>
      </Layout>
    )
  }
}

module.exports = New;