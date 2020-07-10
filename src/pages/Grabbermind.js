import React, { Component } from 'react'
import { Popover } from 'evergreen-ui/commonjs/popover'
import { Pane } from 'evergreen-ui/commonjs/layers'
import { Button, Icon, InfoSignIcon, Tooltip } from 'evergreen-ui'
import { MdRepeat } from 'react-icons/md'
import { Position } from 'evergreen-ui/commonjs/constants'
import TimerGrabberMind from './TimerGrabberMind'
//import { Tooltip } from 'antd'
import { IconButton } from 'evergreen-ui/commonjs/buttons'
//import { InfoSignIcon } from '@blueprintjs/icons'
import ReactToolTip from 'react-tooltip'

class Grabbermind extends Component {
  constructor(props) {
    super(props)
    this.state = {
      table: Array(32).fill(''),
      buttons: [
        'Red',
        'Green',
        'Blue',
        'Orange',
        'White',
        'Gray',
        'Pink',
        'Yellow',
      ],
      sidebarResults: Array(8).fill(''),
      rowCount: 0,
      gameIsOn: false,
      gameWon: false,
      colorArray: Array(4).fill(''),
      startTime: Date,
    }
  }

  startGame() {
    const { table, buttons, rowCount, sidebarResults, gameIsOn } = this.state

    if (gameIsOn) {
      window.location.reload(true)
    }

    this.setState({ gameIsOn: true })

    var time = new Date()
    console.log('time now' + time)

    this.setState({ startTime: time })

    var i
    let tmpArray = [...this.state.colorArray]
    let tmpButtons = [...this.state.buttons]

    for (i = 0; i < tmpArray.length; i++) {
      tmpArray[i] = tmpButtons[this.getRandomInt(0, 7)]
    }
    console.log(tmpArray)
    this.setState({ colorArray: tmpArray })
  }

  handleRestart() {}

  getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  changeColor = (color, index) => {
    console.log(color, index)
    let tmpBoard = [...this.state.table]
    tmpBoard[index] = color
    this.setState({ table: tmpBoard })
    console.log(tmpBoard)
  }

  checkRow() {
    let { rowCount, table, colorArray, gameIsOn } = this.state

    console.log('checkrow pushed ' + this.state.colorArray)

    let currentRowNumber = 4

    if (!gameIsOn) {
      alert('please start game first')
      return
    }

    if (rowCount !== 0) {
      currentRowNumber = rowCount * 4 + 4
    }

    for (var i = 0; i < currentRowNumber; i++) {
      if (table[i] === '') {
        alert('please fill the whole row')
        return
      }
    }

    rowCount++

    console.log('rowcount: ' + rowCount)

    this.setState({ rowCount: rowCount })
  }

  getCorrectedRows = () => {
    const { colorArray: correctAnswer, rowCount, table } = this.state //fråga tobbe angående colorArray:
    const rows = []

    for (let i = 0; i < table.length / 4; i++) {
      if (i >= rowCount) {
        rows.push([])
        continue //fråga tobbe vad meniingen med denna if satsen är
      }

      const answers = table.slice(i * 4, i * 4 + 4)
      const results = Array(4).fill('')

      for (let i = 0; i < answers.length; i++) {
        const answer = answers[i]

        if (answer === correctAnswer[i]) {
          results[i] = ['white', answer]
        }
      }

      for (let i = 0; i < answers.length; i++) {
        const answer = answers[i]

        if (results[i] || !correctAnswer.includes(answer)) {
          continue // fråga tobbe varför vi gör denna checken är det för att effektivisera?
        }

        const total = correctAnswer.filter((color) => color === answer).length
        const current = results.filter((result) => result[1] === answer).length

        if (current < total) {
          results[i] = ['red', answer]
        }
      }

      const colors = results.map((r) => r[0]).filter((r) => r != null)
      rows.push(colors)
    }

    return rows
  }

  timeDifference(endTime) {
    const { table, rowCount, startTime } = this.state

    var difference = endTime.getTime() - startTime.getTime()

    var secondsDifference = Math.floor(difference / 1000)

    var score = (table.length / 4 - rowCount) * secondsDifference

    console.log(
      'Jompahl seconds difference' + secondsDifference + 'score' + score
    )

    return score
  }

  onGameEnded(seconds) {
    console.log('heejejsadjsandj' + seconds)
  }

  render() {
    const { table, buttons, rowCount, sidebarResults, gameIsOn } = this.state

    if (!gameIsOn) {
      console.log('game is on falskt')
    }

    const correctedRows = this.getCorrectedRows()
    const lastRow = rowCount > 0 ? correctedRows[rowCount - 1] : []
    const didWin = lastRow.filter((color) => color === 'white').length === 4

    if (didWin) {
      var date = new Date()
      this.timeDifference(date)
    }

    let disableLow = 4 + rowCount * 4
    let disableHigh = rowCount * 4

    let arrow = (
      <Icon
        icon='arrow-right'
        size={40}
        color='success'
        style={{
          position: 'absolute',
          visibility: !gameIsOn ? 'hidden' : 'visible',

          bottom: rowCount > 0 ? 20 + 81 * rowCount : 20,
        }}
      />
    )

    return (
      <div className='grabbermind'>
        <div
          className='winningPage'
          style={{ visibility: didWin ? 'visible' : 'hidden' }}
        >
          Congratulations!! Your score is:
          {didWin ? this.timeDifference(new Date()) : 'bajs'} you finished in {}
          <button
            onClick={(event) => {
              window.location.reload(true)
            }}
            style={{ opacity: 1, padding: 20, marginTop: 20 }}
          >
            Play Again
          </button>
        </div>
        <div
          className='sideBar'
          data-tip={gameIsOn ? 'current row ' + (rowCount + 1) : ''}
          data-for='toolTip1'
          data-place='top'
        >
          {arrow}
          <ReactToolTip id='toolTip1' />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: 20,
          }}
        >
          <TimerGrabberMind
            seconds={0}
            isRunning={gameIsOn}
            didWin={didWin}
            onGameEnded={() => {
              this.onGameEnded()
            }}
          />
          <div className='grabbermindTable'>
            {table.map((value, index) => {
              return (
                <Popover
                  key={index}
                  position={Position.TOP}
                  content={({ close }) => (
                    <Pane
                      className='popover'
                      background='white'
                      paddingY={10}
                      display='grid'
                      gridTemplateColumns='repeat(4, auto)'
                      gridGap={10}
                    >
                      {buttons.map((value) => {
                        return (
                          <Button
                            key={value}
                            background={value}
                            borderradius='50%'
                            border='2px solid rgba(0, 0, 0, .2)'
                            height={30}
                            width={30}
                            onClick={(event) => {
                              this.changeColor(value, index)
                            }}
                            padding={0}
                          />
                        )
                      })}
                    </Pane>
                  )}
                >
                  <Button
                    justifyContent='center'
                    alignItems='center'
                    height={80}
                    width='25%'
                    disabled={
                      gameIsOn
                        ? index >= disableLow || index < disableHigh
                        : 'none'
                    }
                    style={{
                      position: 'absolute',
                      left: 80 * (index % 4),
                      bottom: 80 * Math.floor(index / 4),
                    }}
                  >
                    <Pane
                      background={value}
                      flex='0 0 50px'
                      borderRadius='50%'
                      justifySelf='center'
                      height={50}
                      width={50}
                      style={{
                        border: value ? '2px solid rgba(0, 0, 0, .2)' : 'none',
                      }}
                    />
                  </Button>
                </Popover>
              )
            })}
          </div>{' '}
          <div className='ButtonHolder'>
            <IconButton icon='settings' size={22} />
            <Button
              onClick={(event) => {
                this.checkRow()
              }}
            >
              Check row
            </Button>
            <Button
              onClick={(event) => {
                this.startGame()
              }}
            >
              {!gameIsOn ? 'Start Game' : 'restart'}
            </Button>{' '}
          </div>
          <text style={{ marginTop: 5 }}></text>
        </div>
        {}

        <div className='sidebarResult'>
          {' '}
          {correctedRows.map((row, index) => (
            <div className='sidebarResults' key={index}>
              {' '}
              <Result results={row} />{' '}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

class Result extends React.Component {
  render() {
    const { answers, correctAnswer, results } = this.props
    if (!Array.isArray(results)) {
      console.log('fastnade i första +' + answers)
      return null
    } else if (Array.isArray(answers)) {
      console.log(results)
    }

    console.log('jompahl' + results)

    return (
      <div className='pinHolder'>
        {results.map((value, index) => {
          return (
            <div
              key={index}
              className='sidebarResult'
              data-tip={
                value === 'white'
                  ? 'Correct color correct place'
                  : 'Correct color wrong place'
              }
              data-for='toolTipPin'
              data-place='top'
              className='correctingPins'
              style={{
                background: value,
                border: value ? '2px solid rgba(0, 0, 0, .2)' : 'none',
                borderradius: '50%',
                height: value ? 20 : 'none',
                width: value ? 20 : 'none',
                margin: value ? 5 : 'none',
              }}
            >
              <ReactToolTip id='toolTipPin' />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Grabbermind
