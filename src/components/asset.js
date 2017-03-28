import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeAsset } from '../actions/index';
import { Table } from 'react-materialize';


import '../.././style/counter.css';



class Asset extends Component  {

  constructor(props) {
    super(props);

    this.onDeleteClick = this.onDeleteClick.bind(this);

  }

    onDeleteClick(e) {
      e.preventDefault();
      this.props.removeAsset(this.props.name);
    }

    render(){
      return (
        <tr className="asset-items" key={this.props.name}>
          <td className="asset-items-each">{this.props.name}</td>
          <td className="asset-items-each"><a href={"https://blockscan.com/address/" + this.props.issuer}>{this.props.issuer}</a></td>
          <td className="asset-items-each"><a href={"https://blockscan.com/address/" + this.owner}>{this.props.owner}</a></td>
          <td className="asset-items-each">{this.props.description}</td>
          <td className="asset-items-each">{this.props.divisible}</td>
          <td className="asset-items-each">{this.props.circulation}</td>
          <td className="asset-items-each">
            <button onClick={this.onDeleteClick} className="asset-items-each">X</button>
          </td>
        </tr>
      )
    }
}



// const Asset = ({ name, issuer, owner, description, divisible, circulation }) => {
//
//     function onDeleteClick(e) {
//       e.preventDefault();
//       this.props.removeAsset(this.props.name);
//       console.log(this.props.name);
//     }
//
//     return (
//       <tr className="asset-items" key={name}>
//         <td className="asset-items-each">{name}</td>
//         <td className="asset-items-each"><a href={"https://blockscan.com/address/" + issuer}>{issuer}</a></td>
//         <td className="asset-items-each"><a href={"https://blockscan.com/address/" + owner}>{owner}</a></td>
//         <td className="asset-items-each">{description}</td>
//         <td className="asset-items-each">{divisible}</td>
//         <td className="asset-items-each">{circulation}</td>
//         <td className="asset-items-each">
//           <button onClick={onDeleteClick} className="asset-items-each">X</button>
//         </td>
//       </tr>
//     )
// }



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ removeAsset }, dispatch);
}

export default connect(null, mapDispatchToProps)(Asset);
