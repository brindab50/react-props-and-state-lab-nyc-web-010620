import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'
import Pets from '../data/pets.js'
import FetchData from '../fetch-setup.js'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (event) =>  {
    this.setState({filters: {type: event.target.value}})
  }

  onFindPetsClick = () => {
    fetch()
    
  }

  render() {  
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
