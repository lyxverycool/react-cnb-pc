import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
require ('./common.scss')

export default class HeaderOther extends Component{
	constructor(props){
		super(props)	
	}		
	render(){
		let {style_1,style_2,style_3,style_4,style_5,style_6}=this.props;
		return(
			<div className="header_2">    
				<header>
		   	    	<a className="logo_2" href="#"><img src={require("../../images/index/main_logo03.png")} alt="logo"/></a>
			        <nav>
			   	    	<li><Link style={style_1} to='/index' className="nav_2">首页</Link></li>
			            <li><Link style={style_2} to='/productIntroduce' className="nav_2">产品</Link></li>
			            <li><Link style={style_3} to='/platform' className="nav_2">企业平台</Link></li>
			            <li><Link style={style_4} to='/info' className="nav_2">政策实务</Link></li>
			            <li><Link style={style_5} to='/hrService' className="nav_2">HR服务</Link></li>
			            <li><Link style={style_6} to='/mall' className="nav_2">福利商城</Link></li>
		            </nav>
		            <div className="login_regist_2">
			            <a href="#" className="login_2 text-center btns_2">注册</a> 
			            <a href="#" className="regist_2 text-center btns_2">登录</a>
		            </div>		                          
		   		</header>	   
			</div>
		)
	}
}