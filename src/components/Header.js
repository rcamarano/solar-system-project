import React, { Component } from 'react';
import styles from './Header.module.css';

class Header extends Component {
  render() {
    return (
      <header className={ styles.Header }>
        <h1>Sistema Solar</h1>
      </header>
    );
  }
}

export default Header;
