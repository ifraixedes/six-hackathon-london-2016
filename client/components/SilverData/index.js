
import React, { Component } from 'react'
import { ScatterChart } from 'react-d3'


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
    return <ScatterChart
      legend={false}
      data={this.state.data}
      width={800}
      height={300}
      title='Silver'
      xAxisTickInterval={{ unit: 'year', interval: 5 }}
    />
  }
})

function getData() {
  // Bluemix fails with 2 concurrent request so we need to retry the request
  // when it doesn't return 200
  return fetch('http://geobenchapp.mybluemix.net/getcommoditydata?commodity=SILVER')
  .then(r => {
    if (r.status !== 200) {
      return getData()
    }

    return r.json().then(d => {
      return [{
        name: 'Silver',
        values: d.map(h => {
          return {
            x: new Date(h['2'], h['3']),
            y: Number.parseFloat(h['4'])
          }
        })
      }]
    })
  })
}

