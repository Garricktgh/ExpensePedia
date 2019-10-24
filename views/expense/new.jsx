const React = require('react');
const Layout = require('../layout');
const Nav = require('../nav');

class New extends React.Component {
  render(){
    return(
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <h1>What are you spending on today?</h1>
          <form action={`/expenses`} method="POST">
            <p>Category</p>
            <select type="text" name="category">
              <option value="Entertainment">Entertainment</option>
              <option value="Transport">Transport</option>
              <option value="Food">Food</option>
              <option value="Drinks">Drinks</option>
              <option value="Ultilities">Ultitilies</option>
              <option value="Clothes">Clothes</option>
              <option value="Others">Others</option>
            </select>
            <br/><br/>
            <p>Date</p>
            <input type="date" name="date"/><br/><br/>
            <p>Amount</p>
            <input type="text" name="amount"/><br/><br/>
            <p>Message</p>
            <input type="text" name="message"/><br/><br/>
            <input type="hidden" name="user_id" defaultValue={this.props.id}/>
            <input class="btn btn-primary" type="submit" value="Submit expense"/><br/><br/><br/><br/>
          </form>
        </body>
      </Layout>
    )
  }
}

module.exports = New;