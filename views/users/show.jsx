const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class Show extends React.Component {
  render(){
    const list = this.props.result.map(user  => {
     return (
       <div>
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
          <h1>Your profile</h1>
          <div className="card text-white bg-dark mb-3">
            {list}
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = Show