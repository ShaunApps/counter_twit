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
    const divisible =assetData.data.map(thing => thing.divisible);
    const circulation = assetData.data.map(thing => thing.circulation);

    return (
      <tr className="asset-items" key={name}>
        <td className="asset-items-each">{name}</td>
        <td className="asset-items-each"><a href={"https://blockscan.com/address/" + issuer}>{issuer}</a></td>
        <td className="asset-items-each"><a href={"https://blockscan.com/address/" + owner}>{owner}</a></td>
        <td className="asset-items-each">{description}</td>
        <td className="asset-items-each">{divisible}</td>
        <td className="asset-items-each">{circulation}</td>
      </tr>
    );
  }



  render() {
    return (
      <div className="table-border">
        <Table className="bordered responsive-table">
          <thead>
            <tr>
              <th className="asset-items-title">Asset</th>
              <th className="asset-items-title">Issuer</th>
              <th className="asset-items-title">Owner</th>
              <th className="asset-items-title">Description</th>
              <th className="asset-items-title">Divisible?</th>
              <th className="asset-items-title">Circulation</th>
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
