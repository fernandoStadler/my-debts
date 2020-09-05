import React from 'react';
import './App.css';

import Header from './components/header'
import Footer from './components/footer'
import Debt from './pages/debt'

export default class Home extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <Debt />
        <Footer />
      </div>
    );
  }
}