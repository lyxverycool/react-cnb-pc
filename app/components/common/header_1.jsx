import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
require ('./common.scss')

export default class Header extends Component{
	constructor(props){
		super(props)	
	}		
	render(){
		let {style_1,style_2,style_3,style_4,style_5,style_6}=this.props;
		return(
			<div className="header_1">    
				<header>
		   	    	<a className="logo_1" href="#"><img src={require("../../images/index/main_logo02.png")} alt="logo"/></a>
			        <nav>
			   	    	<li><Link style={style_1} to='/index' className="nav_1">首页</Link></li>
			            <li><Link style={style_2} to='/productIntroduce' className="nav_1">产品</Link></li>
			            <li><Link style={style_3} to='/platform' className="nav_1">企业平台</Link></li>
			            <li><Link style={style_4} to='/info' className="nav_1">政策实务</Link></li>
			            <li><Link style={style_5} to='/hrService' className="nav_1">HR服务</Link></li>
			            <li><Link style={style_6} to='/mall' className="nav_1">福利商城</Link></li>
		            </nav>
		            <div className="login_regist_1">
			            <a href="#" className="login_1 text-center btns_1">注册</a> 
			            <a href="#" className="regist_1 text-center btns_1">登录</a>
		            </div>		                          
		   		</header>	   
			</div>
		)
	}
}