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
    let { rowCount, table, colorArray } = this.state
    let red = 0
    let white = 0
    let sidebarResults = [...this.state.sidebarResults]

    console.log('checkrow pushed ' + this.state.colorArray)

    let currentRowNumber = 0

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

    /*if (rowCount === 0) {
      let arrayNumber = 4 * rowCount

      for (
        var i = table.length - arrayNumber;
        i < table.length - arrayNumber + 4;
        i++
      ) {
        if (table[i] === '') {
          return 'please fill the whole grabbrow'
        }
      }
      for (var a = 0; a < colorArray.length; a++) {
        if (table[28 + a] === colorArray[a]) {
          white = white + 1
        } else if (colorArray.includes(table[28 + a])) {
          red = red + 1
        }
      }
      console.log('antal vita: ' + white + ' antal röda: ' + red)
      let results = Array(4).fill('')

      for (var i = 0; i < red; i++) {
        results.push('red')
      }

      for (var i = 0; i < white; i++) {
        results.push('white')
      }

      sidebarResults[rowCount] = results
      console.log(sidebarResults + ' jompahl ' + results)

      rowCount = rowCount + 1
      this.setState({ rowCount: rowCount, sidebarResults })
      console.log(rowCount)
    }*/
  }

  render() {
    const { table, buttons, rowCount, sidebarResults, gameIsOn } = this.state

    let arrow = <Icon icon='arrow-right' size={40} top={10 * rowCount} />

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
                    disabled={!gameIsOn}
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
        {/* <div className='sidebarResult'>
          {sidebarResults.map((value, index) => {
            return (
              <div className='sidebarResults' key={index}>
                {Array.isArray(value)
                  ? value.map((value, index) => <div key={index}>{value}</div>)
                  : null}
              </div>
            )
          })}
        </div> */}
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
      return null
    }

    let red = 0
    let white = 0
    let whiteArray = Array(4).fill('')
    let redArray = Array(4).fill('')

    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i]
      if (answer === correctAnswer[i]) {
        whiteArray[i] = answer
        white++
      }
    }

    for (let i = 0; i < answers.length; i++) {
      const answer = answers[i]
      if (
        correctAnswer.includes(answer) &&
        !whiteArray.includes(answer) &&
        !redArray.includes(answer)
      ) {
        redArray[i] = answer
        red++
      } /* else if (
        correctAnswer.includes(answer) &&
        whiteArray.includes(answer)
      ) {
        let indexWhereColorIs = null

        for (let j = 0; j < whiteArray; j++) {
          if (whiteArray[j] === answer) {
            indexWhereColorIs = j
          }
        }

        if (indexWhereColorIs < i) {
          redArray = answer
          red++
        }
      } */
    }

    console.log({ answers, correctAnswer })
    console.log('antal vita: ' + white + ' antal röda: ' + red)
    let results = Array(4).fill('')

    for (var i = 0; i < red; i++) {
      results.push('red')
    }

    for (var i = 0; i < white; i++) {
      results.push('white')
    }

    return (
      <div>
        {results.map((value, index) => {
          return (
            <div
              key={index}
              background={value}
              className='correctingPins'
              borderradius='50%'
              height={50}
              width={50}
              style={{
                background: value,
                border: value ? '2px solid rgba(0, 0, 0, .2)' : 'none',
                borderradius: '50%',
                height: value ? 20 : 'none',
                width: value ? 20 : 'none',
              }}
            ></div>
          )
        })}
      </div>
    )
  }
}

export default Grabbermind
