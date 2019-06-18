import React from 'react'
import PropTypes from 'prop-types'

function TodoForm(props) {
    return (
        <div>
            <h2>Add A Task</h2>
            <form>
               <input type='text' name='todo' required/>
               <button>Add todo</button>
            </form>
        </div>

    )
}

TodoForm.propTypes = {

}

export default TodoForm

