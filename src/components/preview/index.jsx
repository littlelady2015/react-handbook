import React, { Component } from 'react';
import RcViewer from './rc-viewer';
import './index.scss';
export default class ImagePreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      images: []
    }

  }
  
  render() {
    const options = {
      toolbar: false,
      moveable: false,
      rotatable: false,
      zoomOnWheel: false
    }
    return (
    <RcViewer options={options}>
        <ul id="images">
          <img src="http://10.99.28.180:8080/1.jpg" alt="Picture 1" />
          <span>图片1</span>
          <img src="http://10.99.28.180:8080/2.jpg" alt="Picture 2" />
          <span>图片2</span>
          <img src="http://10.99.28.180:8080/3.jpg" alt="Picture 3" />
          <span>图片3</span>
        </ul>
      </RcViewer>
    );
  }
}

