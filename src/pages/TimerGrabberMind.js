import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: parseInt(this.props.seconds),
      maxTime: parseInt(this.props.maxTime),
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
    this.props.onGameEnded(this.state.count)
    clearInterval(this.myInterval)
    this.setState({
      count: this.state.count,
    })
  }

  reset = () => {
    this.setState({ count: 0 })
    this.start()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.isRunning && !prevProps.isRunning) {
      this.start()
    } else if (!this.props.isRunning && prevProps.isRunning) {
      this.reset()
    } else if (this.props.didWin && !prevProps.didWin) {
      console.log('timer stopped')
      this.stop()
    }

    if (this.state.count === 0 && prevState.count !== 0) {
      this.props.onGameEnded()
    }
  }

  componentWillUnmount() {
    clearInterval(this.myInterval)
  }

  render() {
    const { count } = this.state
    return (
      <div className='Timer' style={{ fontSize: 27 }}>
        {count}
      </div>
    )
  }
}

export default Timer
