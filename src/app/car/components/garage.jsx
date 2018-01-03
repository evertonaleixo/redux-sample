import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Car from './car'
import sellCarAction from '../services/sell_car_service'
import marketVariationAction from '../services/market_variation_service'

class Garage extends React.Component {
  
  applyMarketVariation() {
    setTimeout(() =>{ 
      this.props.marketVariation();

      this.applyMarketVariation();
    }, 5000);
  }

  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.applyMarketVariation();
  }

  render() {
    let carsGarage = this.props.carReducer.cars_garage;

    return (
      <div>
        <h1>Minha Garagem</h1>

        {carsGarage.map((car, idx) => (
            <Car model={car.model} toBuy={false} val={car.val} onAct={this.props.sellCar} id={idx} key={idx} />
          ))}
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    carReducer: state.carReducer
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({
    sellCar: sellCarAction,
    marketVariation: marketVariationAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Garage);