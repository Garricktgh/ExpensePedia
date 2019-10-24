const React = require('react');
const Layout = require('../layout');
const NavLogin= require('../nav-login');

class Create extends React.Component {
  render(){
    return(
      <Layout>
        <NavLogin>
        </NavLogin>
        <body>
          <h1>Account created</h1>
          <p>Username: {this.props.req.body.username} </p>
          <p>Password: {this.props.req.body.password}</p>
          <p>Name: {this.props.req.body.name}</p>
          <p>Email: {this.props.req.body.email}</p>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;