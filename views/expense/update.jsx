const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Show extends React.Component {
  render(){
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Updated:</h1>
          <div className="card text-white bg-dark mb-3">
            <p>Category: {this.props.result[0].category}</p>
            <p>Date: {moment(this.props.result[0].date).format('ll')}</p>
            <p>Amount: {this.props.result[0].amount}</p>
            <p>Message: {this.props.result[0].message}</p>
            <form action={`/expenses/${this.props.req.params.id}/edit`} method="GET">
              <input  class="btn btn-secondary" type="submit" defaultValue="Edit"/>
            </form>
            <form action={`/expenses/${this.props.req.params.id}?_method=delete`} method="POST">
              <input  class="btn btn-secondary" type="submit" defaultValue="Delete"/>
            </form>
          </div>
        </body>
      </Layout>
    )
  }
}

module.exports = Show