import React from 'react'
import PropTypes from 'prop-types'

function Todo(props) {
    return (
        <div>
           <input  type='checkbox' id='todo' name='todo' onClick={() => { props.completed(props.id) }}/>
           <p>{props.todo}</p> 
        </div>
    )
}

Todo.propTypes = {

}

export default Todo;

