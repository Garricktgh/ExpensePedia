const React = require("react");
const Layout = require('../layout');
const Nav = require('../nav-login');

class ErrorPage extends React.Component {
  render() {
    return (
      <Layout>
        <Nav>
        </Nav>
        <body>
          <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4 "><b>Invalid Username or Password</b></h1>
            </div>
          </div>
        </body>
      </Layout>
    );
  }
}

module.exports = ErrorPage;
