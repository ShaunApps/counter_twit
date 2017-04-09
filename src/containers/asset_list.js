import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-materialize';
import Asset from '../components/asset';

import '../.././style/counter.css';

class AssetList extends Component {


  renderAsset(assetData) {

    const name = assetData.name;
    const issuer = assetData.issuer;
    const owner = assetData.owner;
    const description = assetData.description;
    const divisible =assetData.divisible;
    const circulation = assetData.circulation;
    return (
      <Asset key={name} name={name} issuer={issuer} owner={owner} description={description} divisible={divisible} circulation={circulation} />
    );
  }

  render() {
    return (
      <div className="table-border">
        {this.props.asset.assets.length > 0 && // only render the table header if there are assets
        <Table className="responsive-table">
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
            {this.props.asset.assets.map(this.renderAsset)}
          </tbody>
        </Table>
        }
      </div>

    );
  }
}


function mapStatetoProps({ asset }) {
  return { asset };
}


export default connect(mapStatetoProps)(AssetList);
