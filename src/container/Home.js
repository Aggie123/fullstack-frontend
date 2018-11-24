import React, { Component } from 'react';
import request from '../api/request';

export default class Home extends Component {

	ComponentDidMount(){
		console.log('home')
		request.getData('/')
	}

  render() {
    return (
      <div>
        <h2>Welcome!</h2>
      </div>
    )
  }
}