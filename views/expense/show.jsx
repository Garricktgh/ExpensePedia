const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Show extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div className="card ">
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p><br/><br/>
          <form action={`/expenses/${expense.id}/edit`} method="GET">
            <input class="btn btn-secondary" type="submit" defaultValue="Edit"/>
          </form>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <input class="btn btn-secondary" type="submit" defaultValue="Delete"/>
          </form>
        </div>
      );
     })
    return (
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <head />
        <body>
          <h1>Single Expense</h1>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Show;
