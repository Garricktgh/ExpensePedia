const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Create extends React.Component {
  render(){
    const list = this.props.result.map(expense  => {
     return (
       <div>
          <p>Id: {expense.id} </p>
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p>
       </div>
     );
    })
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Expense Created</h1>
          {list}
        </body>
      </Layout>
    )
  }
}

module.exports = Create;