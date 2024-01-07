// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCount extends Component {
  state = {
    mangoCount: 0,
    bananaCount: 0,
  }

  onClickEatBanana = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  onClickEatMango = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="counter-con">
        <div className="fru-coun">
          <h1 className="count-text">
            Bob ate<span className="count">{mangoCount}</span>mangoes
            <span className="count">{bananaCount}</span>bananas
          </h1>
          <div className="control-cont">
            <div className="count-cont">
              <img src="" alt="mango" className="fruit-image" />
              <div className="button-cont">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="count-cont">
              <img src="" alt="Banana" className="fruit-image" />
              <div className="button-cont">
                <button
                  type="button"
                  className="button"
                  onClick={this.onClickEatBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCount
