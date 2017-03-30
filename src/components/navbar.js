import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import '../.././style/counter.css';



export default class NAVBAR extends Component {
  render() {
    return (
      <Navbar brand="Queryparty" src="../../professional.jpg" right>
        <NavItem href='#/search'>Search for an Asset</NavItem>
        <NavItem href='http://www.counterparty.io'>Learn about Counterparty</NavItem>
        <NavItem href='https://www.bitcoin.org'>Learn about Bitcoin</NavItem>
      </Navbar>
    );
  }
}
