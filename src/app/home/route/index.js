export default {
  path: 'home',
  component: require('../components/home_main').default,
  childRoutes: [
  	{
  		path: 'garage',
  		getComponent(nextState, cb){
        System.import(/* webpackChunkName: "garage" */ '../components/home_garage').then((m)=> {
          cb(null, m.default)
        })
      }
  	},
  	{
  		path: 'dealership',
  		getComponent(nextState, cb){
        System.import(/* webpackChunkName: "dealership" */ '../components/home_dealership').then((m)=> {
          cb(null, m.default)
        })
      }
  	}
  ]
};
