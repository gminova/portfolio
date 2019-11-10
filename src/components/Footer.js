import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        &copy;2019 Made with{' '}
        <span role="img" aria-label="heart-emoji">
          ❤️
        </span>{' '}
        by G. Minova
      </footer>
    );
  }
}

export default Footer;
