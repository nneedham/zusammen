import React from 'react';
import {fetchUserScores} from '../store/fetchUserScores.js';
import {connect} from 'react-redux';


export class UserScores extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      auth : {},
      userScores: {}
    }
  }

  componentDidMount() {
    this.props.fetchUserScores(1)
    this.setState({
      auth: this.props.auth,
      userScores: this.props.userScores
    })
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id) {
      this.setState({
        auth: this.props.auth,
        userScores: this.props.userScores
      })
      this.props.fetchUserScores(this.props.auth.id)
      this.setState({
      auth: this.props.auth,
      userScores: this.props.userScores
    })
    }
  }

  render() {
    const userScores = this.state.userScores[0]
    let userScoresArr =[]
    if (userScores) {
      userScoresArr = Object.keys(userScores)

    }
    // let UserScores = this.props.UserScores.UserScores || {}
    // console.log('this.props', this.props)
    // console.log('this.state', this.state)
    console.log(userScoresArr)
    return (
      <div>
        <h1>This is where your scores go!</h1>


      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  userScores: state.fetchUserScores,
  auth: state.auth
})

const mapDispatchToProps = (dispatch) => ({
    fetchUserScores: (id) => dispatch(fetchUserScores(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserScores)
