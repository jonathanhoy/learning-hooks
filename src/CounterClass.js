import React , {Component} from 'react'

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    }
  }

  increase = () => this.setState({count: this.state.count + 1})
  
  decrease = () => this.setState({count: this.state.count - 1})

  render() {
    return (
      <div>
        <h2>Class Component Counter</h2>
        <p>Current count: {this.state.count}</p>
        <button onClick={this.decrease}>-</button>
        <button onClick={this.increase}>+</button>
      </div>

    )
  }

}

export default CounterClass