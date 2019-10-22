const React = require('react');

class New extends React.Component {
  render(){
    return(
      <html>
        <body>
          <h1>What are you spending on today?</h1>
          <form action={`/expenses`} method="POST">
            <p>Category</p>
            <input type="text" name="category"/><br/><br/>
            <p>Date</p>
            <input type="text" name="date"/><br/><br/>
            <p>Amount</p>
            <input type="text" name="amount"/><br/><br/>
            <p>Message</p>
            <input type="text" name="message"/><br/><br/>
            <input type="hidden" name="user_id" defaultValue={this.props.id}/>
            <input type="submit" value="Submit expense"/><br/><br/><br/><br/>
          </form>
        </body>
      </html>
    )
  }
}

module.exports = New;