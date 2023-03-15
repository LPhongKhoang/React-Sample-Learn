import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ContextProvider from "./provider";

function DemoContextApi() {
  return <ContextProvider>
    <div>Demo context api</div>
    <AddTodo />
    <TodoList />
  </ContextProvider>;
}

export default DemoContextApi;