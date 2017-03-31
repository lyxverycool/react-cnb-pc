import React,{Component} from 'react';
import HeaderOther from '../common/header_2';
import Footer from '../common/footer';
import _borderBotttomStyle from '../../config/boderBottomStyle';

export default class HrService extends Component{
  constructor(props){
    super(props)
  }
  
  render() {
    return (
      <div>
        <HeaderOther style_5={_borderBotttomStyle} />
        <div className='content_2'>
          <Footer />
        </div>
      </div>
    );
  }
}
