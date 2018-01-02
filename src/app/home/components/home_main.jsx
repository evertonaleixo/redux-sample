import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'; 

import Dealership from '../../car/components/dealership'
import Garage from '../../car/components/garage'
import Workshop from '../../car/components/workshop'

class Home extends React.Component {

  handleFactory() {
    
  }


  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.setState({name: 'Everton', num: 0});
  }


  render() {
    let money = this.props.home_counter.money;

    return  (
        <div style={{margin: '50px'}} className='text-center' >
          <h1>
            Ola {name}! Voce tem {money} reais.
          </h1>

          <Dealership />
          <Garage />

    		</div>
    );
  }

}

function mapStateToProps(state) {
  return {
    home_counter: state.home_counter
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)