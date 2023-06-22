import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: true}

  onClick = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getButtonText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribe' : 'Subscribed'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="paragraph">Thank you! Happy Learning</p>
        <button className="button" onClick={this.onClick}>
          {buttonText}
        </button>
      </div>
    )
  }
}

export default Welcome
