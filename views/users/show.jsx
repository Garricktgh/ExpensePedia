const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class Show extends React.Component {
  render(){
    const list = this.props.result.map(user  => {
     return (
       <div>
        <p>Id: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </div>
     );
    })
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>User profile</h1>
          {list}<br/><br/>
        </body>
      </Layout>
    )
  }
}

module.exports = Show