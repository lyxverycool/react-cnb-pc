import React,{Component,PropTypes} from "react";
import HeaderOther from '../common/header_2';
import Footer from '../common/footer';
import _borderBotttomStyle from '../../config/boderBottomStyle';
import {roles,datas,dataLists} from './platformText';
require('./platform.scss')

export default class Platform extends Component{
	constructor(props){
		super(props)
		console.log(dataLists[0].contents)
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
					<section className="module_container">
					  <div className="container" style={{paddingTop: '10px', borderTop:'2px dashed #999',width:'1000px'}}>
					    <div className="row">
					      <div className="col-xs-12 col_div_1" style={{height: '160px'}}>
					        <span style={{lineHeight: '160px'}}>在这里，您可以做到</span>
					      </div>
					      <div className="col-xs-12" style={{padding: 0,margin: '0 -15px',width: '1030px'}}>
					       {datas.map(
								(data,i)=>{
									return (
										  <div className="col-xs-4" key={i}>
									          <div className="canDo">
									            <div>
									              <div className="col_title_div">
									                <p className="col_title_p1"><span>{data.title}</span></p>
									                <p className="col_title_p2"><span>{data.content}</span></p>
									              </div>
									            </div>
									            <div className="pic_"></div>
									          </div>
									     </div>
									)
								}
					       	)}
					      </div>
					    </div>
					  </div>
					</section>
					<section className="module_container">
					  <div className="container" style={{paddingBottom: '80px'}}>
					    <div className="col_div_1 text-center ">
					      <span>我们能为您达成</span>
					    </div>
					    <div style={{marginTop: '50px'}}>
						    {dataLists.map(
								(dataList,i)=>{
									return (
										<div key={i} className="col-xs-3 list" style={{textAlign: 'center',height:'151px'}}>			
								        <div className="plat_charact_title">
								          <p><span>{dataList.title}</span></p>
								        </div>
								        <div className="plat_charact_dt">									
											<p><span>{dataList.content_1}</span></p>
											<p><span>{dataList.content_2}</span></p>
											<p><span>{dataList.content_3}</span></p>									        
								        </div>
								      </div>
									)
								}
						    )}
					    </div>
					  </div>
					</section>
					<Footer />
				</section>
			</div>
		);
	}
}
