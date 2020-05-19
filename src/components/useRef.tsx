import React, { useState, useRef } from 'react';

interface IResumeUserProps {
  value: any;
}
const defaultValue = {
  name: '小明',
  age: 13
}
const ResumeUserFather: React.FC = () => {
  const [value, setValue] = useState({});
  const handleClick = () => {
    setValue(defaultValue);
  }
  return (
    <>
    <ResumeUser value={value}/>
    <button onClick={handleClick}>点击</button>
    </>
  )
}
const ResumeUser: React.FC<IResumeUserProps> = (props: any) => {
  const changeRef = useRef(props.value);
  // const [userError, setUserError] = useState(props.errorStatus);

  return (
    <div>123</div>
  );
};
export default ResumeUser;
