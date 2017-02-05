import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Table } from 'react-materialize';

import '../.././style/counter.css';

class AssetList extends Component {
  renderAsset(assetData) {
    const name = assetData.data.map(thing => thing.asset);
    const issuer = assetData.data.map(thing => thing.issuer);
    const owner = assetData.data.map(thing => thing.owner);
    const description = assetData.data.map(thing => thing.description);
    return (
      <tr className="asset-items" key={name}>
        <td>{name}</td>
        <td><a href={"https://blockscan.com/address/" + issuer}>{issuer}</a></td>
        <td><a href={"https://blockscan.com/address/" + owner}>{owner}</a></td>
        <td>{description}</td>
      </tr>
    );
  }


  render() {
    return (
      <div className="table-border">
        <Table className="bordered responsive-table">
          <thead>
            <tr>
              <th>Asset</th>
              <th>Issuer</th>
              <th>Owner</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {this.props.asset.map(this.renderAsset)}
          </tbody>
        </Table>
      </div>

    );
  }
}


function mapStatetoProps({ asset }) {
  return { asset };
}


export default connect(mapStatetoProps)(AssetList);
