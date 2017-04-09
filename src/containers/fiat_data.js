import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAsset } from '../actions/index';




export default class FiatData extends Component {

  render() {
    return (
      <div>
        <h1>Rendering Fiat Data</h1>
      </div>
    )
  }
}
