import React, { Component } from 'react'
import { connect } from 'react-redux'
import Todo from './Todo';
import {completed} from '../store/actionCreator';


class TodoList extends Component {
  
    render() {

        console.log(this.props.todoList)
        const list = this.props.todoList || [];  
        return (
           list.map(item => <Todo  key={item.id} id={item.id} todo={item.todo} completed={this.props.completed}/>)
           )
    }
}

function mapStateToProps(state) {
    return {
        todoList: state.todos
    }
}
export default connect(mapStateToProps, {completed})( TodoList );