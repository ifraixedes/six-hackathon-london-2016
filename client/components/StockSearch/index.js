
import React, { Component } from 'react'
import Autocomplete from 'react-autocomplete'

class StockSearch extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      stocksList: []
    }
  }

  getStocks(search) {
    fetch(`https://s.yimg.com/aq/autoc?region=US&lang=en-US&query=${search}`)
    .then(r => r.json())
    .then(d => {
      this.setState({ stocksList: d.ResultSet.Result })
    })
  }

  updatePortfolio(item) {
    this.props.add(item)
  }

  render() {
    return <div className='stockSearch'>
      <Autocomplete
        ref="autcomplete"
        items={ this.state.stocksList }
        getItemValue={ (item) => `${item.symbol} ${item.name}` }
        onSelect={ (value, item) => {
            this.updatePortfolio(item)
          }
        }
        onChange={ (event, value) => this.getStocks(value) }
        renderItem={ (item, isHighlighted) => (
          <div>{ item.symbol } - { item.name }</div>
        )}/>
      </div>
  }
}

module.exports = StockSearch
