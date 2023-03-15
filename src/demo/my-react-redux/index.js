import { Provider } from "react-redux";
import { Counter } from "./Counter";
import { store } from "./store";

function DemoReactRedux() {
  return <Provider store={store}>
  <Counter />
</Provider>;
}

export default DemoReactRedux;