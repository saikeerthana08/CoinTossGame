// Write your code here
import {Component} from 'react'
import './index.css'

const headsImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossImage: headsImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onClickButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        tossImage: headsImage,
        headsCount: prevState.headsCount + 1,
      }))
    } else {
      this.setState(prevState => ({
        tossImage: tailsImage,
        tailsCount: prevState.tailsCount + 1,
      }))
    }
  }

  render() {
    const {headsCount, tailsCount, tossImage} = this.state
    const total = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="text">Heads (or) Tails</p>
          <img src={tossImage} alt="toss result" className="image" />
          <button className="button" type="button" onClick={this.onClickButton}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{headsCount}</p>
            <p className="count">Tails:{tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
