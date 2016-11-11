import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBroadcasts } from '../actions/index';
import { bindActionCreators } from 'redux';


class BroadcastList extends Component {
  componentWillMount() {
    this.props.fetchBroadcasts();
  }

  renderBroadcast(broadcastData) {
    const source = broadcastData.data.map(thing => thing.source);
    const text = broadcastData.data.map(thing => thing.text);
    const block_index = broadcastData.data.map(thing => thing.block_index);
    const tx_hash = broadcastData.data.map(thing => thing.tx_hash);
    return (
      <tr className="asset-items" key={name}>
        <td>{source}</td>
        <td>{text}</td>
        <td>{block_index}</td>
        <td>{tx_hash}</td>
      </tr>
    );
  }

  render(){
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
          <th>Source</th>
          <th>Text</th>
          <th>Block Index</th>
          <th>Tx Hash</th>
          </tr>
        </thead>
        <tbody>
          {this.props.broadcast.map(this.renderBroadcast)}
        </tbody>
      </table>
    )
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBroadcasts }, dispatch);
}

export default connect(null, mapDispatchToProps)(BroadcastList);
