import React, { Component, reactEvent } from 'react';
export default class QrCode extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this); 
    this.handleClickQr = this.handleClickQr.bind(this);
    this.state = {
      active: false,
    };
  }
  componentDidMount() {
    document.body.addEventListener('click', e => {
      if(e.target && e.target.matches('div code')) {
        return false;
      }
      this.setState({
        active: false,
      });
    });
    // document.querySelector('.code').addEventListener('click', e => {
    //   e.stopPropagation();
    // })
  }
  componentWillUnmount() {
    document.body.removeEventListener('click');
    document.querySelector('.code').removeEventListener('click');
  }
  handleClick() {
    this.setState({
      active: !this.state.active,
    });
  }
  handleClickQr() {
    reactEvent.nativeEvent.stopPropagation();
  }
  render() {
    return (
      <div className="qr-wrapper">
        <button className="qr" onClick={this.handleClick}>点击展示</button> <div
          className="code"
          onClick={this.handleClickQr}
          style={{ display: this.state.active ? 'block' : 'none' }}
        >
          <img src="https://i0.hdslb.com/bfs/face/693e5fd83df7c7fc86af00a594ade5ee4671db79.jpg@96w_96h_1c.webp" alt="qr" />
        </div> </div>
    );
  }
}