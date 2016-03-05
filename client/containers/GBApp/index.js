
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PortfolioChart from '../../components/PortfolioChart'
import StockSearch from '../../components/StockSearch'
import * as PortfolioActions from '../../actions/portfolio'

class GBApp extends Component {
  render() {
    const { actions, stocks } = this.props
    return (
      <div>
        <PortfolioChart stocks={stocks}/>
        <StockSearch add={actions.addStock}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stocks: state.stocks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PortfolioActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GBApp)

