export const ACTION_TYPES = {
  ADD_ITEMS: 'ADD_ITEMS',
  REMOVE_ITEMS: 'REMOVE_ITEMS',
  TOGGLE_DONE: 'MARK_DONE',

}

export const initialState = {
  todoList: [],
  color: 'red',
  counter: 0
}

/**
 * 
 * @param {Object} state 
 * @param {{id: number; name: string; isDone: boolean}[]} state.todoList 
 * @param {string} state.color 
 * @param {number} state.counter 
 * @param {Object} param1 
 * @param {string} param1.type 
 * @param {Object} param1.payload 
 * @returns 
 */
export const reducer = (state, {type, payload}) => {
  switch(type) {
    case ACTION_TYPES.ADD_ITEMS:
      return {
        ...state,
        todoList: [
          ...state.todoList,
          {
            id: Date.now(),
            name: payload.name,
            isDone: false
          }
        ]
      }
    case ACTION_TYPES.REMOVE_ITEMS:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== payload.id)
      }

    case ACTION_TYPES.TOGGLE_DONE:
      const newTodoList = state.todoList.map(el => {
        if(el.id === payload.id) {
          return {
            ...el,
            isDone: !el.isDone
          }
        }
        return el;
      });
      console.log('----', state);

  
      return {
        ...state,
        todoList: newTodoList
      }

    default:
      return state;
  }
}