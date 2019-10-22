let React = require('react');

class Edit extends React.Component {
  render() {
    return(
      <html>
        <body>
          <h1>Edit Expense: {this.props.id}</h1>
          <form action={`/expenses/${this.props.id}?_method=put`} method="POST">
            <p>Category</p>
            <input type="text" name="category" defaultValue={this.props.result[0].category}/><br/><br/>
            <p>Date</p>
            <input type="text" name="date" defaultValue={this.props.result[0].date}/><br/><br/>
            <p>Amount</p>
            <input type="text" name="amount" defaultValue={this.props.result[0].amount}/><br/><br/>
            <p>Message</p>
            <input type="text" name="message" defaultValue={this.props.result[0].message}/><br/><br/>
            <input type="submit" value="Edit"/>
          </form>
        </body>
      </html>
    );
  }
}

module.exports = Edit;