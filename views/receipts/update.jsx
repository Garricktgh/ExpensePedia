const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Update extends React.Component {
  render() {
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <head />
        <body>
          <h1>Receipt Added</h1>
          <div className="card text-white bg-dark mb-3">
            <p>Category: {this.props.req.body.category} </p>
            <p>Date: {moment(this.props.req.body.date).format('ll')} </p>
            <p>Amount: {this.props.req.body.amount} </p>
            <p>Message: {this.props.req.body.message}</p>
            <form action={`/expenses/${this.props.req.params.id}/edit`} method="GET">
              <button class='bx bxs-edit' type="submit"></button>
            </form>
            <form action={`/expenses/${this.props.req.params.id}?_method=delete`} method="POST">
              <button class="bx bxs-trash" type="submit"/>
            </form>
        </div>
            <h3>Receipt:</h3>
            <img src={this.props.result.secure_url}></img><br/>
            <form action={`/receipts/${this.props.req.params.id}/edit`} method="GET">
                <button class='btn btn-dark bx bxs-edit' type="submit"></button>
            </form>
        </body>
      </Layout>
    );
  }
}

module.exports = Update;