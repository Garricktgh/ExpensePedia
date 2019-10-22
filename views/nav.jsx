const React = require('react');

class Nav extends React.Component {
    render() {
        let personalised;
        if (this.props.children === undefined) {
          personalised = 
          <div>
            <span className="navbar-brand"><a className="text-white" href="/login">Log in</a></span>
            <span className="navbar-brand"><a className="text-white" href="/register">Register</a></span>
          </div>
        } else {
          personalised = 
          <div>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item">
                <a className="nav-link text-white" href="#">{this.props.children}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/expenses/new">New Expense</a>
                </li>
                <li className="nav-item">
                      <a className="nav-link text-white" href="/register">Log Out</a>
                  </li>
              </ul>
            </div>
          </div>
          
        };
        return (
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand"><a className="text-white" href="/">EXPENSEPEDIA</a></span>
                {personalised}
            </nav>
        );
    };
};

module.exports = Nav;