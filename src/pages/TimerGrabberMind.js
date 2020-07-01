import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: parseInt(this.props.seconds),
    }
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }

  decrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }))
  }

  reset = () => {
    this.setState({ count: this.props.seconds })
  }

  start = () => {
    this.myInterval = setInterval(this.incrementCount, 1000)
  }

  stop = () => {
    clearInterval(this.myInterval)
    this.setState({
      count: this.state.count + parseInt(this.props.increment),
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isRunning && !prevProps.isRunning) {
      this.start()
    } else if (!this.props.isRunning && prevProps.isRunning) {
      this.stop()
    } else if (!this.props.didWin && prevProps.didWin) {
      this.stop()
    }

    if (this.state.count === 0 && prevState.count !== 0) {
      this.props.onTimerEnded()
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { count } = this.state
    return <div className='Timer'>{count}</div>
  }
}

export default Timer
