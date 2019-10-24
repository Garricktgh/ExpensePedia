const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Show extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div>
          <p>Expense Id: {expense.id} </p>
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p><br/><br/>
          <form action={`/expenses/${expense.id}/edit`} method="GET">
            <input class="btn btn-primary" type="submit" defaultValue="Edit"/>
          </form>
          <br/>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <input class="btn btn-primary" type="submit" defaultValue="Delete"/>
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
          <h3>Single Expense</h3><br/>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Show;
