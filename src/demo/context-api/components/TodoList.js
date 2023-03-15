import { useContext } from "react";
import { AppOneContext } from "../provider";
import { ACTION_TYPES } from "../store";

function TodoList() {
  const { state, dispatch } = useContext(AppOneContext);

  return <div>
    {state.todoList.map((item, idx) => (
      <div key={idx}>
        <input 
          type='checkbox'
          checked={item.isDone} 
          onChange={() => {
            dispatch({
              type: ACTION_TYPES.TOGGLE_DONE,
              payload: {id: item.id}
            })
          }}
        /> 
        <span className={item.isDone ? 'done' : ''}>{item.name}</span>
      </div>
    ))}
  </div>;
}

export default TodoList;