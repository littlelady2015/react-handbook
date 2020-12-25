import React from 'react';
export default React.forwardRef(function(_props, ref) {
  const handleFocus = () => {
    ref.current.value = '123';
    console.log(ref);
  }
  return <input ref={ref} className="fancy-class" onClick={handleFocus} />
});
