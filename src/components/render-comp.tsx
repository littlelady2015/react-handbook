import React, { ErrorInfo } from 'react';
// import ReactDOM from 'react-dom';
import './BEMExample.scss';
export interface IProps {
  [key: string]: any
}
export interface IState {
  count?: number | 0;
  father?: string;
  hasError?: boolean;
}


interface RefObject<T> {
  // immutable
  readonly current: T | null
}
interface IMouseProps {
  render: any;
  [key: string]: any;
}
class Cat extends React.Component<IProps> {
  render() {
    const mouse = this.props.mouse;
    return (
      <div className="img-wrapper" style={{ position: 'relative', left: mouse.x, top: mouse.y }}></div>
    );
  }
}
// class MouseTracker extends React.Component<IMouseProps> {
//   render() {
//     return (
//       <div>
//         <h1>Move the mouse around!</h1>
//         <Mouse render={(mouse: any) => (
//           <Cat mouse={mouse} />
//         )} />
//       </div>
//     );
//   }
// }
// const RenderFatherComp: React.FC<IProps> = () => {
//   const [father, setFather] = useState('父亲');
//   return <>
//     <button onClick={() => setFather((f) => f + 'father')}>click to change father</button>
//     <div>this is {father}</div>
//     <RenderComp ></RenderComp>
//   </>
// }
// class RenderComp extends React.Component<IProps, IState> {
//   private containerRef: string | ((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null | undefined;
//   constructor(props: any) {
//     super(props);
//     this.containerRef = React.createRef() as any;
//     this.state = {
//       count: 0,
//     }
//   }
//   onClick = () => {
//     let flag = ReactDOM.unmountComponentAtNode(document.querySelector('#root') as Element);
//     console.log(flag);
//   }
//   render() {
//     return <>
//       <div ref={this.containerRef}>
//         <button onClick={this.onClick.bind(this)}>儿子</button>
//         <h2>上面才是{this.props.father}</h2>
//       </div>
//     </>
//   }
// }

class Mouse extends React.Component<IMouseProps> {
  constructor(props: IMouseProps) {
    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event: any) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          Instead of providing a static representation of what <Mouse> renders,
          use the `render` prop to dynamically determine what to render.
        */}
        {this.props.render(this.state)}
      </div>
    );
  }
}
class ErrorBoundary extends React.Component<IMouseProps, IState> {
  constructor(props: IMouseProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: string) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log('error', error);
    console.log('info', info);
    this.setState({
      hasError: true
    })
  }
  jumpError = () => {
    throw Error
  }
  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children ? this.props.children : <h1>no Error at all
      <select>
        <option value="grapefruit">Grapefruit</option>
        <option value="lime">Lime</option>
        <option selected value="coconut">Coconut</option>
        <option value="mango">Mango</option>
      </select>
      <button onClick={this.jumpError}>jumpError</button>
    </h1>;
  }
}
export default ErrorBoundary;
// export default RenderFatherComp;
