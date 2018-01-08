import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'; 
import { Link } from 'react-router'

import Dealership from '../../car/components/dealership'
import Garage from '../../car/components/garage'

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

          <button className="btn btn-success" style={{margin:15}}>
            <Link to='home/garage'>
              Garagem
            </Link>
          </button>

          <button className="btn btn-success" style={{margin:15}}>
            <Link to='home/dealership'>
              Comércio
            </Link>
          </button>

          {this.props.children}

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