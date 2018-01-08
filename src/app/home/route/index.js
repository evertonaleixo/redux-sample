import  Garage  from '../components/home_garage'
import Dealership from '../components/home_dealership'

export default {
  path: 'home',
  component: require('../components/home_main').default,
  childRoutes: [
  	{
  		path: 'garage',
  		component: Garage
  	},
  	{
  		path: 'dealership',
  		component: Dealership
  	}
  ]
};
