var React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class Home extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div>
          <p>Expense Id: {expense.id} </p>
          <p>Category: {expense.category} </>
          <p>Date: {expense.date} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p><br/><br/>
          <form action={`/expense/${expense.id}?_method=delete`} method="POST">
            <input type="submit" defaultValue="Delete"/>
          </form>
        </div>
        
      );
     })
    return (
      <Layout>
        <Nav>
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

module.exports = Home;