import React, { useState } from "react";

const TodoForm = (props) => {
  const [todo, setTodo] = useState("");
  //merekam event dari field input 
  const handleChangeInput = (e) => {
    setTodo(e.target.value);
  };
  //membuat form beserta styling
  const { addNewTodo } = props;
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addNewTodo(todo);
        setTodo("");
      }}
    >
      <input
        type="text"
        name="todo"
        required
        onChange={handleChangeInput}
        value={todo}
        style={{
          width: "100%",
          height: "30px",
          padding: "0 10px",
          borderRadius: "5px",
          border: "1px solid black",
          marginBottom: "10px",
        }}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          height: "30px",
          borderRadius: "5px",
          backgroundColor: "green",
          color: "white",
          border: "none",
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
