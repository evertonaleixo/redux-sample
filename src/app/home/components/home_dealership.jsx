import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'; 

import Dealership from '../../car/components/dealership'

class Home extends React.Component {

  handleFactory() {
    
  }

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }


  render() {
    return  (
        <Dealership />
    );
  }

}

function mapStateToProps(state) {
  return {

  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({

  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)