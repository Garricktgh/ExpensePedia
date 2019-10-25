const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Index extends React.Component {
  render() {
    const list = this.props.result.map(expense  => {
      return (
        <div className="card text-white bg-dark mb-3">
          <br/>
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p>
          <form action={`/expenses/${expense.id}`} method="GET">
            <input class="btn btn-secondary" type="submit" defaultValue="View"/> 
          </form>
          <form action={`/expenses/${expense.id}/edit`} method="GET">
            <input class="btn btn-secondary" type="submit" defaultValue="Edit"/> 
          </form>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST">
            <input class="btn btn-secondary" type="submit" defaultValue="Delete"/>
          </form>
          <br/><br/>
        </div>
      );
     })
    return (
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Hello {this.props.req.cookies.username}</h1>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Index;
