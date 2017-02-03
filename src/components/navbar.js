import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';



export default class NAVBAR extends Component {
  render() {
    return (
      <Navbar img="" right>
        <NavItem href='#'>Getting started</NavItem>
        <NavItem href='#'>Components</NavItem>
      </Navbar>
    );
  }
}