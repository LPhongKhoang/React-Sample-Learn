import { Provider } from "react-redux";
import { ProductList } from "./ProductList";
import { store } from "./store";

function DemoReactReduxToolkit() {
  return <Provider store={store}>
  <ProductList />
</Provider>;
}

export default DemoReactReduxToolkit;