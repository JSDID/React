import React, { Component } from 'react'
import Header from './Header/Header';
import './App.css';
import Nav from './Nav/Nav';
import Banner from './Banner/Banner';
import Content from './Content/Content';

export default class App extends Component {
    render() {
      return (
      <>
          <Header/>
          <div className='App-wrapper'>
          <Nav/>
          <Banner/>
          <Content/>
          </div>
      </>
      );
  }
}


