import React, { Component } from 'react';

export default class User extends Component {
  constructor(props) {
    super(props);
  
    this.state = {};
  }

  componentDidMount() {
    this.setState({
      user: this.props.params.userId
    })
  }


  render() {
    return (
      <div>
        <h2>{this.state.user.name}</h2>
      </div>
    )
  }
}