import React from 'react';
import './BEMExample.scss';
export interface IBEMProps {

}
const BEMExample = (props: IBEMProps) => {
   return [
      <button className="button"> primary </button>,
      <button className="button--secondary"> secondary </button>, 
      <button className="button"> primary </button>
   ]
};
export default React.memo(BEMExample as any);
