const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Edit extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div>
          <div className="card text-white bg-dark mb-3">
            <p>Category: {expense.category} </p>
            <p>Date: {moment(expense.date).format('ll')} </p>
            <p>Amount: {expense.amount} </p>
            <p>Message: {expense.message}</p>
            <form action={`/expenses/${expense.id}/edit`} method="GET">
              <button class='bx bxs-edit' type="submit"></button>
            </form>
            <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
              <button class="bx bxs-trash" type="submit"/>
            </form>
          </div>
          <form class="cloud-form" enctype="multipart/form-data" action={`/receipts/${this.props.req.params.id}?_method=put`} method="POST">
            <input type="hidden" name="category" defaultValue={expense.category}/>
            <input type="hidden" name="date" defaultValue={expense.date}/>
            <input type="hidden" name="amount" defaultValue={expense.amount}/>
            <input type="hidden" name="message" defaultValue={expense.message}/>
            <input class="btn-dark" type="file" name="myFile"/><br/><br/>
            <input class="btn btn-dark" type="submit" value="Submit"/>
          </form>
        </div>
      );
     })
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <head />
        <body>
          <h1>Add Receipt</h1>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Edit;