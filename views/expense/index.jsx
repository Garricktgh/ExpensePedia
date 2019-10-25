const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Index extends React.Component {
  render() {
    const jumbopic = 'watercolor.jpeg';
		const jumbo = {
			backgroundImage: `url(${jumbopic})`,
			backgroundPosition: 'center',
			backgroundSize: 'cover',
			backgroundRepeat: 'repeat'
		}
    const list = this.props.result.map(expense  => {
      return (
        <div className="card text-white bg-dark mb-3">
          <p>Category: {expense.category} </p>
          <p>Date: {moment(expense.date).format('ll')} </p>
          <p>Amount: {expense.amount} </p>
          <p>Message: {expense.message}</p>
          <form action={`/expenses/${expense.id}`} method="GET" id="view">
            <button class='bx bxs-show' type="submit" form="view"></button> 
          </form>
          <form action={`/expenses/${expense.id}/edit`} method="GET" id="edit">
            <button class='bx bxs-edit' type="submit" form="edit"></button>
          </form>
          <form action={`/expenses/${expense.id}?_method=delete`} method="POST" id="delete">
            <button class="bx bxs-trash" type="submit" form="delete"/>
          </form>
        </div>
      );
     })
    return (
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
        <div class="jumbotron jumbotron-fluid" style={jumbo}>
          <div class="container">
            <h1 class="display-4 ">Hello <b>{this.props.req.cookies.username}</b></h1>
          </div>
        </div>
          {list}
        </body>
      </Layout>
    );
  }
}

module.exports = Index;
