import {Component} from 'react'

import Products from '../file2'

import './index.css'

// import Products from '../file2'

class Home extends Component {
  state = {daTa: ''}

  componentDidMount() {
    this.getdetails()
  }

  getdetails = async () => {
    const response = await fetch('https://www.reddit.com/r/reactjs.json')
    const data = await response.json()
    this.setState({daTa: data})
  }

  render() {
    const {daTa} = this.state
    return (
      <div className="main1">
        <div className="pic">
          <div className="data">
            {daTa &&
              daTa.data.children.map(child => (
                <Products happy={child} key={child.id} />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Home
