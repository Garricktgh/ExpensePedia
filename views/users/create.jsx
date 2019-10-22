const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class Create extends React.Component {
  render(){
    return(
      <Layout>
        <Nav>
        </Nav>
        <body>
          <h1>Account created</h1>
          <p>Username: {this.props.result.username} </p>
          <p>Password: {this.props.result.password}</p>
          <p>Name: {this.props.result.name}</p>
          <p>Email: {this.props.result.email}</p>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;