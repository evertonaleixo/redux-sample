import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

class Workshop extends React.Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <h1>Oficina</h1>
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Workshop);