var React = require("react");

class Home extends React.Component {
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
      <html>
        <head />
        <body>
          <h3>Hello</h3><br/><br/>
          {list}
        </body>
      </html>
    );
  }
}

module.exports = Home;
