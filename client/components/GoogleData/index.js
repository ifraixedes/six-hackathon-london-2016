
import React, { Component } from 'react'
import { AreaChart } from 'react-d3'


module.exports = React.createClass({
  getInitialState() {
    console.log('test')
    return { data: [] }
  },

  componentDidMount() {
    console.log('initial state')
    getData().then(d => { this.setState({ data: d }) })
  },

  render() {
    return <AreaChart
      data={this.state.data}
      width={800}
      height={300}
      title='Google stock'
      xAxisTickInterval={{ unit: 'year', interval: 1 }}
    />
  }
})

function getData() {
  return fetch('http://geobenchapp.mybluemix.net/getstockdata?company=GOOG')
  .then(r => r.json())
  .then(d => {
    return [{
      name: 'Google',
      values: d.map(h => {
        let year = Number.parseInt(h.YEAR)
        let month = Number.parseInt(h.MONTH) - 1

        return {
          x: new Date(year, month),
          y: Number.parseFloat(h.VALUE)
        }
      })
    }]
  })
}

