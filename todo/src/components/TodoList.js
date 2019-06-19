import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo';

class TodoList extends Component {
  
    render() {

        console.log(this.props.todoList)
        const list = this.props.todoList || [];  
        return (
           list.map(item => <Todo  key={item.id} todo={item.todo}/>)
           )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todos
    }
}
export default connect(mapStateToProps)( TodoList );