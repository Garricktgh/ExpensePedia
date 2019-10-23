const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Create extends React.Component {
  render(){
    console.log("view", this.props.req.body);
    let total_expense = this.props.result2.rows[0].sum;
    const list = this.props.result.map (expense => {
      let percent = parseInt(expense.cat_expense) / parseInt(total_expense) * 100;
      return (
        <div>
          <p>{expense.category} Expenses: ${expense.cat_expense} ({percent.toFixed(2)}%)</p>
        </div>
      )
    }); 
    console.log("view", this.props.result[0]);
    console.log("view", this.props.result2.rows);
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>Expenses Summary: </h1>
          <p>Start Date: {moment(this.props.req.body.start_date).format('ll')}</p>
          <p>End Date: {moment(this.props.req.body.end_date).format('ll')}</p>
          {list}
          <p>Total Expenses: ${this.props.result2.rows[0].sum}</p>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;