import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
require ('./common.scss')

export default class Footer extends Component{
	constructor(props){
		super(props)	
	}		
	render(){
		return(
			<div className="footer">    
				<section className="home_bottom" style={{width:'100%'}}>
			        <section className="top">
				        <div className="container">
					        <div className="row text-center" style={{margin:0}}>
					          <div className="col-xs-6 text-left" style={{paddingLeft:0}}>
					            <ul className="list-unstyled contract">
					              <li className="title">联系我们</li>
					              <li className="right-content" style={{fontSize:'14px'}}>
					              <span>
					                <i className="fa fa-phone"></i>
					              </span>
					                服务热线：
					                <div className="info">4008-062-822</div>
					                <div style={{display:'inline-block',marginLeft:'15px',fontSize:'1.2rem'}}>工作时间：周一至周五 9:00-20:00</div>
					              </li>
					              <li className="right-content" style={{fontSize:'14px'}}>
					              <span>
					                <i className="fa fa-envelope"></i>
					              </span>
					                投诉建议：
					                <div className="info"><a className="mailto" role="button" href="mailto:user@cnbexpress.com">user@cnbexpress.com</a></div>
					              </li>
					              <li className="right-content" style={{fontSize:'14px'}}>
					              <span>
					                <i className="fa fa-map-marker fa-lg"></i>
					              </span>
					                公司地址：
					                <div className="info">上海市延安西路726号华敏翰尊12J座</div>
					              </li>
					            </ul>

					          </div>
					          <div className="col-xs-6">
					            <div className="col-xs-3">
					              <ul className="module list-unstyled" style={{width:'100%'}}>
					                <li className="title"><a href="#">关于我们</a></li>
					                <li className="content"><a  href="#">平台介绍</a></li>
					                <li className="content"><a href="#">免责声明</a></li>
					                <li className="content"><a href="https://dn-cnbexpress-public.qbox.me/cnb-manual.rar?attname=CNB Express 产品使用手册.rar">使用手册</a></li>
					              </ul>
					            </div>
					            <div className="col-xs-3">
					              <ul className="module list-unstyled" style={{width:'100%'}}>
					                <li className="title"><a href="#">帮助中心</a></li>
					                <li className="content"><a href="#">在线咨询</a></li>
					                <li className="content"><a href="#">投诉建议</a></li>
					                <li className="content"><a href="#">热门问题</a></li>
					              </ul>
					            </div>
					            <div className="col-xs-3">
					              <ul className="module list-unstyled" style={{width:'100%'}}>
					                <li className="title"><a href="#">HR服务</a></li>
					                <li className="content"><a href="#">人力资源外包</a></li>
					                <li className="content"><a href="#">高端猎头服务</a></li>
					                <li className="content"><a href="#">招聘流程外包</a></li>
					                <li className="content"><a href="#">设备维护外包</a></li>
					              </ul>
					            </div>
					            <div className="col-xs-3">
					              <ul className="module list-unstyled" style={{width:'100%'}}>
					                <li className="title"><a href="#">福利商城</a></li>
					                <li className="content"><a href="#">搜体检中心</a></li>
					                <li className="content"><a href="#">福利超市</a></li>
					                <li className="content"><a href="#">积分超市</a></li>
					              </ul>
					            </div>
					          </div>
					        </div>
				        </div>
				    </section>
				    <section className="bottom">
				        <div className="container" style={{width:'1000px',padding: 0}}>
					        <div className="row links">
					          <div className="text-left address fre">
					            <span>友情链接</span>
					          </div>
					          <div className="text-left address" style={{marginLeft: '77px'}}>
					            <div className="text-left">
					              <a href="http://www.mohrss.gov.cn/" target="_blank">人力资源和社会保障部</a>
					              <a href="http://www.mps.gov.cn/n2254996/index.html" target="_blank">公安部出入境管理局</a>
					              <a href="http://www.chinatax.gov.cn/" target="_blank">国家税务总局</a>
					              <a href="http://www.chinajob.gov.cn/" target="_blank">中国就业网</a>
					              <a href="http://www.stats.gov.cn/" target="_blank">国家统计局</a>
					            </div>
					            <div className="text-left">
					              <a href="http://www.bjrbj.gov.cn" target="_blank">北京人社局</a>
					              <a href="http://www.tax861.gov.cn/" target="_blank">北京地税局</a>
					              <a href="http://www.12333sh.gov.cn/" target="_blank">上海人社局</a>
					              <a href="http://www.tax.sh.gov.cn/" target="_blank">上海地税局</a>
					              <a href="http://www.hrssgz.gov.cn/" target="_blank">广州人社局</a>
					              <a href="http://www.gzds.gov.cn/" target="_blank">广州地税局</a>
					              <a href="http://www.szhrss.gov.cn/" target="_blank">深圳人社局</a>
					              <a href="http://www.szds.gov.cn/" target="_blank">深圳地税局</a>
					            </div>
					          </div>
					        </div>
					        <div className="row">
					          <div className="col-xs-12 text-center copyright">
					            <span>Copyright © 2016</span>
					            <span>上海利唐信息科技有限公司  版权所有</span>
					            <span>沪ICP备16020917号</span>
					          </div>
					        </div>
				        </div>
			        </section>
			  	</section>  
			</div>
		)
	}
}