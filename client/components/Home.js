import React from 'react'
import {createResume} from '../store/createResume.js'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userId: 0,
      text: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      userId: this.props.auth.id
    })
    console.log(this.props)
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createResume({...this.state});
  }

  render() {
    const { text } = this.state;
    const {handleChange, handleSubmit} = this;
    return (
      <div>
        <form id='resume-form' onSubmit={handleSubmit}>
          <label htmlFor='text'>Resume Text:</label>
          <textarea name='text' onChange={handleChange} value={text} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

/**
 * CONTAINER
 */

const mapState = (state) => ({
  auth: state.auth
})
const mapDispatch = (dispatch) => ({
  createResume: (resume) => dispatch(createResume(resume))
})

export default connect(mapState, mapDispatch)(Home)
