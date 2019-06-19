import { ADD_TODO, IS_COMPLETED } from "./action";
import uuid from 'uuid';


function addTodo(item) {
    return {
        type: ADD_TODO,
       payload: {
        todo: item,
        id: uuid(),
        isComplete: false
       }
    }
}

function completed(id) {
    return{
        type: IS_COMPLETED,
        payload: id,
    }
}

export { addTodo, completed}