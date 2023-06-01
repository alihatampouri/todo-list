import Navbar from "./components/Navbar/Navbar";
import TodosProvider from "./components/Providers/TodosProvider";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <TodosProvider>
      <Navbar />
      <div className="container md:container md:mx-auto px-8 py-4">
        <Todo />
      </div>
    </TodosProvider>
  );
}

export default App;
