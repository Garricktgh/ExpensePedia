const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class Create extends React.Component {
  render(){
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
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