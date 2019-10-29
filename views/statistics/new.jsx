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
          <div className="card text-white bg-dark mb-3">
            <form action="/statistics/create" method="POST">
              <p>Start Date:</p>
              <input type="date" name="start_date" required/><br/><br/>
              <p>End Date:</p>
              <input type="date" name="end_date" required/><br/><br/>
              <input class="btn btn-secondary" type="submit" value="Generate"/>
            </form>
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = New;