import React from 'react'

import axios from 'axios'

export default class PersonList extends React.Component {
  state = {
    msg: '',
  }

  componentDidMount() {
    axios.get('http://localhost:8080/')
      .then((res) => {
        this.setState({ msg: res.data.message })
      })
  }

  render() {
    const { msg } = this.state
    return (
      <div>
        <h1>Welcome to Has Frontend!</h1>
        <p>{ msg }</p>
      </div>
    )
  }
}
