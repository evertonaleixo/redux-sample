import React from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'; 

interface HomeState {
  name: string;
  num: number;
}

interface HomeProps {

}

function increment() {
  // return dispatch => {
  //   dispatch(() => {
      return {"type": "INCREMENT"};
  //   });
  // };
}

function decrement() {
  // return dispatch => {
  //   dispatch(() => {
      return {"type": "DECREMENT"}
  //   });
  // };
}

class Home extends React.Component<HomeProps, HomeState> {

  handleBuy() {
    // alert(1);
    this.props.buy();
    // this.setState({num: this.props.home_counter.num});
    // this.setState({num: (this.state.num+1)})
    // console.log(this.props.dispatch.state);
  }

  handleSell() {
    this.props.sell();
  }


  constructor(props: HomeProps){
    super(props);

    this.handleBuy = this.handleBuy.bind(this);
    this.handleSell = this.handleSell.bind(this);
  }

  componentDidMount() {
    this.setState({name: 'Everton', num: 0});
    console.log(this.state);
  }


  render() {
    // console.log(this.props.dispatch.state);
    let name = this.state != null ? this.state.name : '';
    // let count = this.state != null ? this.state.num : 0

    // console.log('--', this.props.home_counter);
    let count = this.props.home_counter.num;

    return  (
        <div style={{margin: '50px'}} className='text-center' >
          <h1>
            Ola {name}! Voce tem {count} {this.props.home_counter.num <= 1 ? <span>carro</span> : <span>carros</span>}.
          </h1>

          <button onClick={this.handleBuy} > Buy </button> 
          <button onClick={this.handleSell} > Sell </button> 
    		</div>
    );
  }

}

function mapStateToProps(state) {
  console.log(state); // state

  return {
    home_counter: state.home_counter
  };
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({
    buy: increment,
    sell: decrement
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)