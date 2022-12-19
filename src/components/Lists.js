import React from "react";

const Lists = ({ todoData, setTodoData }) => {
  const handleClick = (id) => {
    let newTodoData = todoData.filter((todo) => todo.id !== id);
    setTodoData(newTodoData);
  };
  const handleCompleteChange = (id) => {
    const newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => (
        <div
          className="flex items-center w-full justify-between px-4 py-1 my-2 text-gray-600 bg-gray-100 border rounded"
          key={data.id}
        >
          <div className="items-center">
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleteChange(data.id)}
            />{" "}
            <span className={data.completed ? "line-through" : ""}>
              {data.title}
            </span>
          </div>
          <div className="items-center">
            <button onClick={() => handleClick(data.id)}>X</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Lists;
