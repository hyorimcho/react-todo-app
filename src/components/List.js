import React, { useState } from "react";

const List = React.memo(
  ({
    // handleClick,
    id,
    title,
    completed,
    todoData,
    setTodoData,
    provided,
    snapshot,
  }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState(title);

    const handleClick = (id) => {
      let newTodoData = todoData.filter((todo) => todo.id !== id);
      localStorage.setItem("todoData", JSON.stringify(newTodoData));
      setTodoData(newTodoData);
    };

    const handleCompleteChange = (id) => {
      const newTodoData = todoData.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodoData(newTodoData);
    };

    const handleEditChange = (e) => {
      setEditedTitle(e.target.value);
    };

    const handleSubmit = (e) => {
      let newTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editedTitle;
        }
        return data;
      });
      setTodoData(newTodoData);
      localStorage.setIem("todoData", JSON.stringify(newTodoData));
      setIsEditing(false);
    };

    if (isEditing) {
      return (
        <div className="flex items-center justify-between w-full px-4 py-1 my-1 text-gray-600 bg-gray-100 border rounded row">
          <form>
            <input
              className="w-full px-3 py-2 mr-4 text-gray-500 appearance-none"
              value={editedTitle}
              autoFocus
              onChange={handleEditChange}
            />
          </form>
          <div className="items-center">
            <button
              className="px-4 py-2 float-right"
              onClick={() => setIsEditing(false)}
              type="button"
            >
              x
            </button>
            <button className="px-4 py-2 float-right" type="submit">
              save
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div
          key={id}
          {...provided.draggableProps}
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          className={`${
            snapshot.isDragging ? "bg-gray-400" : "bg-gray-100"
          } flex items-center w-full justify-between px-4 py-1 my-2 text-gray-600  border rounded`}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={completed}
              onChange={() => handleCompleteChange(id)}
            />{" "}
            <span className={completed ? "line-through" : ""}>{title}</span>
          </div>
          <div className="items-center">
            <button
              className="float-right px-4 py-2"
              onClick={() => handleClick(id)}
            >
              X
            </button>
            <button
              onClick={handleSubmit}
              className="float-right px-4 py-2"
              onClick={() => setIsEditing(true)}
            >
              edit
            </button>
          </div>
        </div>
      );
    }
  }
);

export default List;
