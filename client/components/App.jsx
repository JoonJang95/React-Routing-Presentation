import React from 'react';
import LoginPage from './LoginPage.jsx';
import MeowPage from './MeowPage.jsx';
import PepPage from './PepPage.jsx';
import Error404 from './Error404.jsx';
import Navbar from './Navbar.jsx';
import HomePage from './HomePage.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    // Part 2

    this.PAGES = {
      '/': HomePage,
      '/login': LoginPage,
      '/meow': MeowPage,
      '/pep': PepPage
    };

    // Part 3

    this.state = {
      url: '/'
    };

    this.changeURL = this.changeURL.bind(this);
  }

  // Part 3

  componentDidMount() {
    console.log(document.location.pathname);
    this.setState({
      url: document.location.pathname
    });
  }

  changeURL(newURL) {
    window.history.pushState(null, `${newURL}Page`, `/${newURL}`);
    this.setState({
      url: `/${newURL}`
    });
  }

  render() {
    //Part 2 => replace HomePage w/ new component
    const CurrentPage = this.PAGES[this.state.url] || Error404;
    // Note - For Part 3 change document.location.pathname to => this.state.url

    return (
      <div>
        <Navbar changeURL={this.changeURL} />
        <CurrentPage changeURL={this.changeURL} />
      </div>
    );
  }
}

export default App;
