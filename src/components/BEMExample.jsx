/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { Component }from 'react';
import PropTypes from 'prop-types';
import './BEMExample.scss';
const ThemeContext = React.createContext({
  color: 'red'
});
class ListItem extends Component {
  static contextType =  ThemeContext;
  render() {
    const { value } = this.props;
    return (
      <li style={{color: this.context.color}}>
        <span>{value}</span>
      </li>
    )
  }
}

class List extends Component{
  static childContextTypes = {
    color: PropTypes.string,
  }
  getChildContext() {
    return {
      color: 'red'
    }
  }
  render() {
    const { list } = this.props;
    return (
      <ThemeContext.Provider value={{
        color: 'blue'
      }}>
      <div>
        <ul>
          {list.map((entry, index) => {
             return <ListItem key={`list-${index}`} value={entry.text} />
          })}
        </ul>
      </div>
      </ThemeContext.Provider>
    )
  }
}
export default List;

