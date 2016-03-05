
import React, { Component } from 'react'
import { PieChart } from 'react-d3'

let pieData = [
  {label: 'Margarita', value: 20.0},
  {label: 'John', value: 55.0},
  {label: 'Tim', value: 25.0 }
];

class PortfolioChart extends Component {
  render() {
    return <PieChart
      data={pieData}
      width={400}
      height={400}
      radius={100}
      innerRadius={20}
      title="Your Portfolio at a Glance" />
  }
}

module.exports = PortfolioChart
