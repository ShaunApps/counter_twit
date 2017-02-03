import React, { Component } from 'react';
import { Footer } from 'react-materialize';


export default class FOOTER extends Component {
  render() {
    return (
      <Footer className="footer" copyrights="&copy; 2017 Shaun Appelbaum"
        
      >
          <h5 className="white-text">Footer Content</h5>
          <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
      </Footer>

    );
  }
}
