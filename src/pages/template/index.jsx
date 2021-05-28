import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/logo.svg';
import './index.less';

function App(props) {
  function goLink() {
    props.history.push('/home/123');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit <code>src/App.js</code> and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div className="menuNav">
          <span onClick={goLink}>主页1</span>
          <NavLink to='/login'>登录页</NavLink>
        </div>
      </header>
    </div>
  );
}

export default App;