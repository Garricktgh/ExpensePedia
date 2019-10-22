const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class Show extends React.Component {
  render(){
    let ownProfile;
    const list = this.props.result.map(user  => {
      (this.props.ownId == user.id) ? ownProfile = true : ownProfile = false;
     return (
       <div>
        <p>Id: {user.id}</p>
        <p>Username: {user.username}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        { ownProfile ?
         null : <form action={`/users`} method="POST">
         <input type="hidden" name="id" defaultValue={user.id}/>
         <input type="hidden" name="username" defaultValue={user.username}/>
         <input type="hidden" name="name" defaultValue={user.name}/>
         <input type="hidden" name="email" defaultValue={user.email}/>
       </form>
        }
      </div>
     );
    })
    return(
      <Layout>
        <Nav>
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