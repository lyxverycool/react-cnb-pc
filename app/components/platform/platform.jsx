import React,{Component,PropTypes} from "react";
import HeaderOther from '../common/header_2';
import _borderBotttomStyle from '../../config/boderBottomStyle';
import {roles} from './platformText';
require('./platform.scss')

export default class Platform extends Component{
	constructor(props){
		super(props)
	}
	
	render() {
		return (
			<div className='platform'>
				<HeaderOther style_3={_borderBotttomStyle}/>
				<section className='platform_'>
					<section className="platform_top">
					  <div className="mask ">
					    <div className="container platform_top_center" style={{width:'1000px',margin:'0 auto',paddingLeft:0}}>
					      <div>
					        <p><span className="platform_title">对所有HR都有用的管理平台</span></p>
					      </div>
					      <div className="platform_subtitle" style={{lineHeight: '16px',marginTop:'23px',height:'61px'}}>
					        <p><span>覆盖薪资核算、社保方案、公积金方案、薪资方案、</span></p>
					        <p style={{marginTop:'16px'}}><span>员工管理、权限管理......</span></p>
					      </div>
					    </div>
					  </div>
					</section>
					<section className="module_container">
					  <div className="container" style={{width:'1000px',height:'136px',lineHeight:'136px',padding:0}}>
					    <div className="row">
					      <div className="col-xs-8 high_title">
					        <span className="behind">薪福快线&nbsp;</span>
					        <span>邀您体验高效带来的快乐</span>
					      </div>
					      <div className="col-xs-4" style={{paddingTop:'40px'}}>
					        <div className="demo_use">立即使用体验</div>
					      </div>
					    </div>
					  </div>
					</section>
					<section className="module_container" style={{background:'#fff'}}>
					  <div className="container" style={{width:'1000px',margin:'0 auto',padding:0}}>
					    <div className="row pic" style={{width:'1000px'}}>
					    	{roles.map(
								(role,i)=>{
									return (<div className="col-xs-4" key={i}><div className="function_div">
							          <div className="role_img" style={{background:role.bg}}>
							            <span className="role_bg">{role.title}</span>
							          </div>
							          <div className="role_content">
							            <ul>
							              <li>{role.text_1}</li>
							              <li>{role.text_2}</li>
							              <li>{role.text_3}</li>
							            </ul>
							          </div>
							        </div>
							      </div>
							      )
								}
					    	)}					      					  					     
					    </div>
					  </div>
					</section>
				</section>
			</div>
		);
	}
}
