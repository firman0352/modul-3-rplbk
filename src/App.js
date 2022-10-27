import { useState } from "react";
import Layout from "./components/Layout";
import TodoCard from "./components/TodoCard";
import TodoForm from "./components/TodoForm";
import "./global.css";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  return (
    <Layout>
      <div
        style={{
          width: "50%",
        }}
      >
        <TodoForm addNewTodo={addNewTodo} />
        {todos.map((todo, index) => (
          <TodoCard todo={todo} key={index} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
