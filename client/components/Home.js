import React from 'react'
import {createResume} from '../store/createResume.js'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      text: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
const mapDispatch = (dispatch) => ({
  createResume: (resume) => dispatch(createResume(resume))
})

export default connect(null, mapDispatch)(Home)
