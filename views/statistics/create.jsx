const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');
const moment = require('moment');

class Create extends React.Component {
  render(){
    let data = [];
    let total_expense = this.props.result2.rows[0].sum;
    const list = this.props.result.map (expense => {
      let percent = parseInt(expense.cat_expense) / parseInt(total_expense) * 100;
      data.push({category : expense.category, percent : percent.toFixed(2)})
      console.log(data);
      return (
        <div>
          <p>{expense.category}: ${expense.cat_expense} ({percent.toFixed(2)}%)</p>
        </div>
      )
    });
    data = JSON.stringify(data); 
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
          <div>
            <canvas id="myChart"  width="400" height="400"></canvas>
          </div>
          <script dangerouslySetInnerHTML={ {__html: `let cData = ${data}`}}/>
          <script src="/script.js"></script>
        </body>
      </Layout>
    )
  }
}

module.exports = Create;