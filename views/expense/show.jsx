const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class Show extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div>
          <p>Expense Id: {expense.id} </p>
          <p>Category: {expense.category} </p>
          <p>Date: {expense.date} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p><br/><br/>
          <form action={`/expenses/${this.props.id}`} method="GET">
            <input type="submit" defaultValue="Edit"/>
          </form>
          <br/>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <input type="submit" defaultValue="Delete"/>
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
