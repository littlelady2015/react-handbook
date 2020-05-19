import React from 'react';
const FancyButton = React.forwardRef((props, ref) => {
  const handleFocus = () => {
    ref.current.value = '123';
    console.log(ref);
  }
  return <input ref={ref} className="fancy-class" onClick={handleFocus} />
});
export default FancyButton;
