/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Link } from 'react-router'

// Import the CSS reset, which HtmlWebpackPlugin transfers to the build folder
import 'sanitize.css/sanitize.css';

import Img from 'components/Img';
import Footer from 'components/Footer';
import Banner from './banner-metal.jpg';
import A from 'components/A';

import styles from './styles.css';

function App(props) {
  return (
    <div className={styles.wrapper}>
      <ul className="list-inline">
        <li>
          <Link to="/comments-demo" activeClassName="active">React 官网教程实践</Link>                
        </li>
        <li>
          <Link to="/todo" activeClassName="active">Todo</Link>
        </li>
        <li>
          <a href="/redux-form">redux-form</a>
        </li>
        <li>
          <a href="/login">登陆测试</a>
        </li>
      </ul>  
      <A className={styles.logoWrapper} href="https://twitter.com/mxstbr">
        <Img className={styles.logo} src={Banner} alt="react-boilerplate - Logo" />
      </A>
      {props.children}
      <Footer />
    </div>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default App;
