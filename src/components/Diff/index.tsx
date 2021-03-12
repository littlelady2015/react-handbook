import React from 'react';
// diff 策略
// 同级别比较
// 不同类型的组件会生成两颗不同的dom树
// 通过key prop来标识哪些子元素在不同的渲染下是保持稳定的
class ClassComponent extends React.Component {
  render() {
    return <p>class component</p>
  }
}
export default function Diff(): JSX.Element {
  return (
    <>
      <h1>hello rachel</h1>
      <ClassComponent />
    </>
  )
}
