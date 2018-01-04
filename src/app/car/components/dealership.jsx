import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import Car from './car'
import CarService from '../services/car_service'


class Dealership extends React.Component {

  newCars() {
    this.props.renewCars();
  }

  constructor(props){
    super(props);

    this.newCars = this.newCars.bind(this);
  }

  componentDidMount() {

  }

  render() {
    let carsDealership = this.props.carReducer.cars_dealership;

    return (
      <div>
        <h1>
          Loja --> 
            <button className='btn btn-primary' onClick={this.newCars}> RENOVAR FROTA </button>
        </h1>
        <h3>Comprar carro</h3>

        {carsDealership.map((car, idx) => (
            <Car model={car.model} toBuy={true} val={car.val} onAct={this.props.buyCar} id={idx} key={idx}/>
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
    buyCar: CarService.buyCarAction(),
    renewCars: CarService.loadCarsAction()
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dealership);