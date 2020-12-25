import React from 'react';
import './BEMExample.scss';

const BEMExample = () => {
   const primaryClick = () => {
     document.cookie = 'user='+encodeURIComponent('zhangyurui');
   }
   return [
      <button key="1" className="button" onClick={primaryClick}> primary </button>,
      <button key="2" className="button--secondary"> secondary </button>, 
      <button key="3" className="button"> primary </button>
   ]
};
export default React.memo(BEMExample as any);
