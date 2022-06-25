import React from 'react';
import { connect } from 'react-redux';
import { setUser, _setUser } from '../store/singleUser.js';

export class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div>
        <h1>Scores will go here</h1>
      </div>
    )
  }
}

export default connect()(User)
