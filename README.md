
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### BEM
w3cplus.com/css/css-architecture-1.html

### REACT API
* unmountComponentAtNode
protal 不能用于服务器端渲染；
什么是服务器端渲染？
* componentDidCatch
在“commit”阶段调用
在任何子组件生命周期中的error都可以catch到；
只能捕捉下层的error，不能捕获当前组件抛出的error
```javascript
componentDidCatch(errorString, errorInfo) {
  this.setState({
    error: errorString
  })
}
render() {
  if(this.state.error) {
    return <div>Error: { this.state.error }</div>
  }else {
    return this.props.children;
  }
}
```
渲染时候抛出了error，react默认处理是将组件树全部删掉；
overlay出错界面,在componentDidCatch后也会出现；
### 更强的服务器端渲染
### 可定制Css Attribute
鼓励所有的attribute都加上data前缀;
### 合适的升级策略
phase1的生命周期函数，可能会被执行多次；所以不要写副作用；

如何设置任务的优先级？
fiber node
和虚拟dom的联系
生命周期不会执行多次
requestAnimation 和空闲时期
