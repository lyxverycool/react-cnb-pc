import React,{Component,PropTypes} from "react";
import Header from '../common/header_1';
import Footer from '../common/footer';
import _borderBotttomStyle from '../../config/boderBottomStyle';
import {lineTops,lineBottoms,texts} from './productIntroduceText';
require ('./productIntroduce.scss')

export default class ProductIntroduce extends Component{
  constructor(props){
    super(props)
  }  
  render(){
    return (
      <div className="productIntroduce">
        <section className="home_top">
            <Header style_2={_borderBotttomStyle}/>
            <div className="text">
              <div className="text-top">
                <b>线上高效自主，线下贴心服务</b>
              </div>
              <div className="text-bottom">
                <b>颠覆HR传统工作方式，开启高效运转的互联网时代</b>
              </div>
            </div>
        </section>
        <section className="home_body">
          <div className="contents">
            <div className="title text-center">
              <b>线上自主</b>
            </div>
            <div className="list text-center">
              4小时上线无忧-省时省力云平台，设备0投入-省人省钱
            </div>
            <div className="containers">
              {lineTops.map(
                   (lineTop,i)=>{
                      return <div className="text text-1" key={i}><img src={lineTop.img} />
                        <div className="text-title text-center">
                          {lineTop.title}
                        </div>
                      </div>
                   }
              )}
            </div>
          </div>
          <div className="contents" style={{height:'370px'}}>
            <div className="title text-center">
              <b>线下服务</b>
            </div>
            <div className="list text-center">
              1天快速反馈、全程贴心协助、500+城市全覆盖
            </div>
            <div className="containers" style={{width:'695px'}}>
              {lineBottoms.map(
                   (lineBottom,i)=>{
                      return (<div className="text text-1" key={i}><img src={lineBottom.img}/>
                        <div className="text-title text-center">
                          {lineBottom.title}
                        </div>
                      </div>)
                   }
              )}
            </div>
          </div>
          <section className="home_body_last">
            <div className="last">
              <div className="last-top">
                <span className="top-left">线下服务</span>
                <span className="top-right">1天快速反馈、全程贴心协助、500+城市全覆盖</span>
              </div>
              <div className="last-center">
                {texts.map(
                 (text,i)=>{
                    return <div className="text" key={i}>
                      <div className="text-title text-center">
                        {text.title}
                      </div>
                      <div className="text-content">
                        {text.content}
                      </div>
                    </div>
                  }
                )}                
              </div>
              <div className="last-bottom">
                <div className="bottom-title">
                  您的专属企业平台，现在就开始体验吧
                </div>
                <div className="bottom-content">
                  <input placeholder="输入手机号" maxLength="11"/>
                  <div className="btns text-center">免费注册</div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </section>
      </div>
    );
  }

}