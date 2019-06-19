import { ADD_TODO, IS_COMPLETED } from './action';

const dummyData = [
    { todo: 'walk dog', completed: false },
    { todo: 'sleep tonight', completed: false }
]

const initialState = {
    todos: []
}

function reducer(state = initialState, action) {

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: state.todos.concat(action.payload)
            }
        case IS_COMPLETED:
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, isTodoComplete: true }
                } return null
            })
        default:
            return state;
    }

}

export default reducer;