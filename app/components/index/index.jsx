import React,{Component,PropTypes} from "react";
import Header from '../common/header_1';
import Footer from '../common/footer';
import _borderBotttomStyle from '../../config/boderBottomStyle';
require ('./index.scss')

export default class Index extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    	<div className="index">
	      <section className="home_top">
            <Header style_1={_borderBotttomStyle}/>
        </section> 
        <section className='home_body'>
           <Footer />
        </section>
    	</div> 
    );
  }

}