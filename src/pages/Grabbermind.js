import React, { Component } from 'react'
import { Popover } from 'evergreen-ui/commonjs/popover'
import { Pane } from 'evergreen-ui/commonjs/layers'
import { Button, Icon } from 'evergreen-ui'
import { MdRepeat } from 'react-icons/md'
import { Position } from 'evergreen-ui/commonjs/constants'

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
    }
  }

  startGame() {
    let gameIsOn = this.state.gameIsOn
    gameIsOn = true

    this.setState({ gameIsOn: gameIsOn })

    var i
    let tmpArray = [...this.state.colorArray]
    let tmpButtons = [...this.state.buttons]

    for (i = 0; i < tmpArray.length; i++) {
      tmpArray[i] = tmpButtons[this.getRandomInt(0, 7)]
    }
    this.setState({ colorArray: tmpArray })
  }

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
    let red = 0
    let white = 0
    let sidebarResults = [...this.state.sidebarResults]

    console.log('checkrow pushed ' + this.state.colorArray)

    let currentRowNumber = 4

    if (!gameIsOn) {
      alert('please start game first')
      return
    }

    if (rowCount !== 0) {
      currentRowNumber = rowCount * 4
    }

    for (var i = 0; i < currentRowNumber; i++) {
      if (table[i] === '') {
        console.log('inte full')
        return 'please fill the whole grabbrow'
      }
    }

    rowCount++

    console.log('rowcount: ' + rowCount)

    this.setState({ rowCount: rowCount })
  }

  render() {
    const { table, buttons, rowCount, sidebarResults, gameIsOn } = this.state

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
        <div className='sideBar'>{arrow}</div>
        <div>
          <div className='grabbermindTable'>
            {table.map((value, index) => {
              return (
                <Popover
                  key={index}
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
                            //className='buttonMind'

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
                    width={80}
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
          <button
            onClick={(event) => {
              this.checkRow()
            }}
          >
            Check row
          </button>
          <button
            onClick={(event) => {
              this.startGame()
            }}
          >
            Start Game
          </button>
          <Icon icon='cross' />
        </div>
        {}
        <div className='sidebarResult'>
          {Array(table.length / 4)
            .fill('')
            .map((c, index) => (
              <div className='sidebarResults' key={index}>
                <Result
                  hello='hello'
                  correctAnswer={this.state.colorArray}
                  answers={
                    rowCount > index
                      ? table.slice(index * 4, index * 4 + 4)
                      : null
                  }
                />
              </div>
            ))}
        </div>
      </div>
    )
  }
}

class Result extends React.Component {
  render() {
    const { answers, correctAnswer } = this.props
    if (!Array.isArray(answers)) {
      console.log('fastnade i första +' + answers)
      return null
    } else if (Array.isArray(answers)) {
      console.log(answers)
    }

    console.log({ answers, correctAnswer })
    let results = Array(4).fill('')

    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i]

      if (answer === correctAnswer[i]) {
        results[i] = ['white', answer]
      }
    }

    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i]

      if (results[i] || !correctAnswer.includes(answer)) {
        continue
      }

      const total = correctAnswer.filter((color) => color === answer).length
      const current = results.filter((result) => result[1] === answer).length

      if (current < total) {
        results[i] = ['red', answer]
      }
      console.log(results[0][i])
    }

    console.log(results)
    console.log(results[0][0])

    return (
      <div className='pinHolder'>
        {results.map((value, index) => {
          return (
            <div
              key={index}
              className='correctingPins'
              style={{
                background: value[0],
                border: value ? '2px solid rgba(0, 0, 0, .2)' : 'none',
                borderradius: '50%',
                height: value ? 20 : 'none',
                width: value ? 20 : 'none',
                margin: value ? 5 : 'none',
              }}
            ></div>
          )
        })}
      </div>
    )
  }
}

export default Grabbermind
