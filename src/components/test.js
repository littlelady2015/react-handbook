// import { h, render, Component } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import { memo } from 'preact/compat';
import React from 'preact/compat';

import './test.scss';


const AnimatedIcon = () => {
  const [helperCls, setHelperCls ] = useState('helper-cartoon');
  const [jumpCls, setJumpCls ] = useState('helper-cartoon')
  const ref = useRef();
  const refJump = useRef(null);
  useEffect(() => {
    const node = ref.current || document.body;
    node.addEventListener('mouseenter', () => {
      setHelperCls(`${helperCls} ${helperCls}__dynamic-blink`);
    });
    node.addEventListener('mouseleave', () => {
      setHelperCls('helper-cartoon');
    })
  }, [helperCls]);

  const addAnimatedJump = () => {
    setJumpCls(jumpCls.concat(` ${jumpCls}__dynamic-jump`));
    setTimeout(()=> {
      setJumpCls('helper-cartoon');
    }, 2000);
  }

  return (
    <div>
      <h5> 动画小人 眨眼睛</h5>
      <h5> 动画小人 跳一跳</h5>
      <div className={`${helperCls}`} ref={ref}></div>
      <div className={`${jumpCls}`} ref={refJump}></div>
       <button onClick={addAnimatedJump} style={{marginTop: '20px'}}>跳一跳</button>
    </div>
  );
}

export default memo(AnimatedIcon);
