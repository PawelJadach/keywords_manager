import Content from "./components/Content";
import {CategoriesContextProvider } from "./context";

function App() {
  return (
    <CategoriesContextProvider>
      <Content />
    </CategoriesContextProvider>
  );
}

export default App;
