import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux';

class Car extends React.Component {

  onAct(e) {
    this.props.onAct(this.props.id, this.props.val);
  }

  constructor(props){
    super(props);

    this.onAct = this.onAct.bind(this);
  }

  componentDidMount() {

  }

  render() {
    let inlineStyle = {
      background: 'white',
      display: 'inline-block',
      padding: 20,
      margin: 10
    };

    return (
      <div style={inlineStyle}>
        <p> Modelo: {this.props.model} </p>
        <p> Valor: {this.props.val} </p>
        <p> <button className='btn btn-success' onClick={ this.onAct } > {this.props.toBuy ?  'Comprar' : 'Vender' } </button>   </p>
      </div>
    );
  }

}

export default connect()(Car);