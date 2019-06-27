import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {addTodo} from '../store/actionCreator';


function TodoForm(props) {
    const todoRef = React.createRef();
    const onAddTodo = () => {
        props.addTodo(
            todoRef.current.value
        );
        todoRef.current.value = '';
    }

    return (
        <div>
            <h2>Add A Task</h2>
            <div>
                <input type='text' name='todo' ref={todoRef} required />
                <button onClick={onAddTodo}>Add todo</button>
            </div>
        </div>
    )
}
TodoForm.propTypes = {

}


export default connect(null, {addTodo})(TodoForm)

