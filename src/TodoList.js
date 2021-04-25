import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: [],
    };
  }

  render() {
    return (
      <Fragment>
        <label htmlFor="inputArea">输入内容</label>
        <input
          id="inputArea"
          value = {this.state.inputValue}
          onChange={this.handleInputChange.bind(this)} />
        <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <TodoItem
                content={item}
                index={index}
                deleteItem={this.handleItemClick.bind(this)}
              />
            )
          })}
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    const value = e.target.value
    this.setState({
      inputValue:value
    })
  }

  handleBtnClick() {
    let list = [...this.state.list, this.state.inputValue];
    this.setState({
      list,
      inputValue: ''
    })
  }

  handleItemClick(index) {
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }
}

export default TodoList
