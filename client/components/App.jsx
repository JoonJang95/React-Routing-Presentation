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

    this.PAGES = {
      '/': HomePage,
      '/login': LoginPage,
      '/meow': MeowPage,
      '/pep': PepPage
    };

    this.state = {
      url: '/'
    };

    this.changeURL = this.changeURL.bind(this);
  }

  componentDidMount() {
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
    const CurrentPage = this.PAGES[this.state.url] || Error404;

    return (
      <div>
        <Navbar changeURL={this.changeURL} />
        <CurrentPage changeURL={this.changeURL} />
      </div>
    );
  }
}

export default App;
