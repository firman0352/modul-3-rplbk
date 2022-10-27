import React from "react";

function TodoCard({ todo, setTodos, todos }) {
  const [isEdit, setIsEdit] = React.useState(false);
  const [todoEdit, setTodoEdit] = React.useState(todo);

  const handleEdit = () => {
    const index = todos.indexOf(todo);
    const newTodos = [...todos];
    newTodos[index] = todoEdit;
    setTodos(newTodos);
    setIsEdit(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "5px",
        marginBottom: "10px",
        marginTop: "10px",
      }}
    >
      {!isEdit && <p>{todo}</p>}
      {isEdit && (
        <input
          type="text"
          name="todo"
          required
          onChange={(e) => setTodoEdit(e.target.value)}
          value={todoEdit}
          style={{
            border: "none",
            borderBottom: "1px solid black",
            height: "30px",
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {!isEdit ? (
          <button
            onClick={() => {
              setIsEdit(true);
            }}
            style={{
              width: "50px",
              height: "30px",
              borderRadius: "5px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
            }}
          >
            Edit
          </button>
        ) : (
          <button
            onClick={handleEdit}
            style={{
              width: "50px",
              height: "30px",
              borderRadius: "5px",
              backgroundColor: "blue",
              color: "white",
              border: "none",
            }}
          >
            Confirm
          </button>
        )}
        <button
          onClick={() => {
            const newTodos = [...todos];
            const index = newTodos.indexOf(todo);
            newTodos.splice(index, 1);
            setTodos(newTodos);
          }}
          style={{
            width: "50px",
            height: "30px",
            borderRadius: "5px",
            backgroundColor: "red",
            color: "white",
            border: "none",
          }}
        >
          x
        </button>
      </div>
    </div>
  );
}

export default TodoCard;
