const React = require('react');

class Create extends React.Component {
  render(){
    const list = this.props.result.map(expense  => {
     return (
       <div>
          <p>Id: {expense.id} </p>
          <p>Category: {expense.category} </p>
          <p>Date: {expense.date} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p>
       </div>
     );
    })
    return(
      <html>
        <body>
          <h1>Expense Created</h1>
          {list}
        </body>
      </html>
    )
  }
}

module.exports = Create;