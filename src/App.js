import Navbar from "./components/Navbar/Navbar";
import TodosProvider from "./components/Providers/TodosProvider";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <TodosProvider>
      <Navbar />
      <section className="md:mx-auto py-4 px-4 lg:px-60 md:px-40">
        <Todo />
      </section>
    </TodosProvider>
  );
}

export default App;
