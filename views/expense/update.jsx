const React = require('react');

class Show extends React.Component {
  render(){
    return(
      <html>
        <body>
          <h1>Updated: {this.props.id}</h1>
          <p>Category: {this.props.result[0].category}</p>
          <p>Date: {this.props.result[0].date}</p>
          <p>Amount: {this.props.result[0].amount}</p>
          <p>Message: {this.props.result[0].message}</p>
          <form action={`/expenses/${this.props.id}?_method=delete`} method="POST">
            <input type="submit" defaultValue="Delete"/>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = Show