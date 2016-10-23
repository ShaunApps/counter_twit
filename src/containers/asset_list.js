import React, { Component } from 'react';
import { connect } from 'react-redux';

class AssetList extends Component {
  renderAsset(assetData) {
    const name = assetData.data.map(thing => thing.asset);
    const description = assetData.data.map(thing => thing.description);
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>{description}</td>
      </tr>
    );
  }


  render() {
    return (
      <table className='table table-hover'>
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
      </table>
    );
  }
}


function mapStatetoProps({ asset }) {
  return { asset };
}


export default connect(mapStatetoProps)(AssetList);
