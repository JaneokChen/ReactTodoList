import React, {Component,Fragment} from 'react'
import TodoItem from './TodoItem'

class TodoList extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }

    this.handleItem = this.handleItem.bind(this)
    this.handleItemClick = this.handleItemClick.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  render(){
    return(
      <Fragment>
        <label htmlFor="inputArea">输入内容</label>
        <input
          id="inputArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleBtnClick}>提交</button>
        <ul>{this.handleItem()}</ul>
      </Fragment>
    )
  }

  handleItem(){
    return this.state.list.map((item, index) => {
      return (
        <TodoItem
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleItemClick}
        />
      )
    })
  }

  handleInputChange(e){
    const value = e.target.value
    this.setState({
      inputValue: value
    })
  }

  handleBtnClick(){
    const list = [...this.state.list, this.state.inputValue]
    this.setState({
      list,
      inputValue: ''
    })
  }

  handleItemClick(index){
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

}

export default TodoList
