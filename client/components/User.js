import React from 'react';
import { connect } from 'react-redux';
import { setUser, _setUser } from '../store/singleUser.js';

export class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 0,
      innovatorWords: 1,
      paragonWords: 1,
      trendSetterWords: 1,
      citizenWords: 1,
      athleteWords: 1,
      stewardWords: 1,
      tinkererWords: 1,
    }
  }

  componentDidMount() {
    this.props.setUser(this.props.match.params.id)
    this.setState({
      id: this.props.match.params.id || 1,
      innovatorWords: this.props.user.innovatorWords,
      paragonWords: this.props.user.paragonWords,
      trendSetterWords: this.props.user.trendSetterWords,
      citizenWords: this.props.user.citizenWords,
      athleteWords: this.props.user.athleteWords,
      stewardWords: this.props.user.stewardWords,
      tinkererWords: this.props.user.tinkererWords,
    })
  }

  componentWillUnmount() {
    this.props.clearUser()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.auth.id !== this.props.auth.id){
      this.setState({
        id: this.props.match.params.id,
        innovatorWords: this.props.user.innovatorWords,
        paragonWords: this.props.user.paragonWords,
        trendSetterWords: this.props.user.trendSetterWords,
        citizenWords: this.props.user.citizenWords,
        athleteWords: this.props.user.athleteWords,
        stewardWords: this.props.user.stewardWords,
        tinkererWords: this.props.user.tinkererWords,
      })
    }
  }

  render() {
    let user = this.state;
    let id = this.props.auth.id
    return (
      <div>
        {id === parseInt(this.props.match.params.id) ? (
          <div>
            <p>innovatorWords: {user.innovatorWords}</p>
            <p>paragonWords: {user.paragonWords}</p>
            <p>trendSetterWords: {user.trendSetterWords}</p>
            <p>citizenWords: {user.citizenWords}</p>
            <p>athleteWords: {user.athleteWords}</p>
            <p>stewardWords: {user.stewardWords}</p>
            <p>tinkererWords: {user.tinkererWords}</p>
          </div>
        ) : (
        <></>
        )}
      </div>
    )
  }
}

const mapState = (state) => ({
  user: state.user,
  auth: state.auth
})

const mapDispatch = (dispatch) => ({
  setUser: (id) => dispatch(setUser(id)),
  clearUser: () => _setUser({})
})

export default connect(mapState, mapDispatch)(User)
