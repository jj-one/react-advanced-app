import React, { Component } from 'react'

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => this.setState({user: data}));
  }

  render() {
    return (
      <div>
        {this.state.user?
        <>
          User Info<br/>
          Name: {this.state.user.name} <br/>
          Email {this.state.user.email}
        </>
        :
          "Loading..."
        }
      </div>
    )
  }
}
