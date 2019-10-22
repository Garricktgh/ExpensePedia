const React = require('react');

class Nav extends React.Component {
    render() {
        let personalised;
        if (this.props.children === undefined) {
            personalised = <a className="my-2 my-sm-0 text-white" href="/login">Log in</a>
        } else {
            personalised = this.props.children;
        };
        return (
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand">Expensepedia</span>
                <span className="navbar-brand">{personalised}</span>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav mr-auto mt-2 mt-lg-0">
                      <li className="nav-item">
                            <a className="nav-link text-white" href="/register">Register</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/expenses/new">New Expense</a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    };
};

module.exports = Nav;