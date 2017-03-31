import React,{Component,PropTypes} from "react";
import HeaderOther from '../common/header_2';
import _borderBotttomStyle from '../../config/boderBottomStyle';

export default class Mall extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return (
    	<div>
    		<HeaderOther style_6={_borderBotttomStyle}/>
	   
    	</div> 
    );
  }

}