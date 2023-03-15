import { useContext, useRef, useState } from "react";
import { AppOneContext } from "../provider";
import { ACTION_TYPES } from "../store";

function AddTodo() {
  const inputNameRef = useRef();
  const [name, setName] = useState('');
  const {dispatch} = useContext(AppOneContext);

  return <div>
    <input 
      type='text' 
      value={name} 
      onChange={(e)=>{setName(e.target.value)}}
      ref={inputNameRef}  
    />
    <button onClick={() => {dispatch({type: ACTION_TYPES.ADD_ITEMS, payload: {name: name}}); setName(''); inputNameRef.current.focus();}}>Add new</button>
  </div>;
}

export default AddTodo;