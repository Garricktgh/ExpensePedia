const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class New extends React.Component {
  render(){
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>What are you spending on today?</h1>
          <form action={`/expenses`} method="POST">
            <p>Category</p>
            <input type="text" name="category"/><br/><br/>
            <p>Date</p>
            <input type="text" name="date"/><br/><br/>
            <p>Amount</p>
            <input type="text" name="amount"/><br/><br/>
            <p>Message</p>
            <input type="text" name="message"/><br/><br/>
            <input type="hidden" name="user_id" defaultValue={this.props.id}/>
            <input type="submit" value="Submit expense"/><br/><br/><br/><br/>
          </form>
        </body>
      </Layout>
    )
  }
}

module.exports = New;