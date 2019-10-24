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
          <h1>Pick Time Period</h1>
          <form action="/statistics/create" method="POST">
            <p>Start Date:</p>
            <input type="date" name="start_date"/><br/><br/>
            <p>End Date:</p>
            <input type="date" name="end_date"/><br/><br/>
            <input class="btn btn-primary" type="submit" value="Generate Expense Statistics"/>
          </form>
        </body>
      </Layout>
    )
  }
}

module.exports = New;