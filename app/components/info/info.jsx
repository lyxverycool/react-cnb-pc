import React,{Component,PropTypes} from "react";
import HeaderOther from '../common/header_2';
import _borderBotttomStyle from '../../config/boderBottomStyle';

export default class Info extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    	<div>
    		<HeaderOther style_4={_borderBotttomStyle}/>
	   
    	</div> 
    );
  }

}