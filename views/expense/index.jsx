const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class Index extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div>
            <p>Expense Id: {expense.id} </p>
            <p>Category: {expense.category} </p>
            <p>Date: {expense.date} </p>
            <p>Amount: {expense.amount} </p>
            <p>Message: {expense.message}</p>
           <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <input type="submit" defaultValue="Delete"/>
          </form>
          <br/><br/><br/><br/>
        </div>
      );
     })
    return (
      <Layout>
        <Nav>
        </Nav>
        <body>
          <h3>Hello</h3><br/><br/>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Index;