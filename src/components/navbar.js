import React, { Component } from 'react';
import { Navbar, NavItem } from 'react-materialize';
import '../.././style/counter.css';



export default class NAVBAR extends Component {
  render() {
    return (
      <Navbar src="../../professional.jpg" right>
        <h2 align="left">Queryparty</h2>
      </Navbar>
    );
  }
}
