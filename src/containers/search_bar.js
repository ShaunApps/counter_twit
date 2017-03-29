import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchAsset } from '../actions/index';

import { Button } from 'react-materialize';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchAsset(this.state.term.toUpperCase());
    this.setState({ term: '' });
  }

  render() {
    return (
      <div>
        <h3 className="project-into">Enter Counterparty asset name below for asset information</h3>
          <div className="search-bar-comp">
            <form onSubmit={this.onFormSubmit} className="input-group search-bar">
              <input
                placeholder="Enter name here ex: 'PEPECASH'"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
              <span className="input-group-btn">
                <Button bsStyle="primary" type="submit" waves="light">Submit</Button>
              </span>
            </form>
          </div>
        </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAsset }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
