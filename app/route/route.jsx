import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory,IndexRoute} from 'react-router';
import Index from '../components/index/index';
import ProductIntroduce from '../components/productIntroduce/productIntroduce';
import Platform from '../components/platform/platform';
import Info from '../components/info/info';
import HrService from '../components/hrService/hrService';
import Mall from '../components/mall/mall';

require ('../style/normal.scss');


class Main extends Component {
    render() {
        return (
            <div>{this.props.children}</div>
        );
    }
};

const route =(
	<Router history={hashHistory}>
       <Route path="/" component={Main}>
       	   <IndexRoute component={Index}/>
	         <Route path="/index" component={Index}/>
	    	   <Route path="/productIntroduce" component={ProductIntroduce}/>
           <Route path="/platform" component={Platform}/>
	    	   <Route path="/info" component={Info}/>
           <Route path="/hrService" component={HrService}/>
           <Route path="/mall" component={Mall}/>
  	   </Route>
  	</Router>
)

export default route;



