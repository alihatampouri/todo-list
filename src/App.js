import Navbar from "./components/Navbar/Navbar";
import Todo from "./components/Todo/Todo";

function App() {
  return (
    <>
      <Navbar />
      <div className="container md:container md:mx-auto px-8 py-4">
        <Todo />
      </div>
    </>
  );
}

export default App;