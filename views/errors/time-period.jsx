const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav');

class ErrorPage extends React.Component {
  render() {
    return (
      <Layout>
        <Nav>
          {this.props.req.cookies.username}
        </Nav>
        <body>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 "><b>No Expenses Found between Time Period Selected</b></h1>
            </div>
          </div>
        </body>
      </Layout>
    );
  }
}

module.exports = ErrorPage;
