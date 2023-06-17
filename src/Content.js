import React from "react";
import { FiTrash2 } from "react-icons/fi";

function Content(props) {
  const todo = props.todo;

  const handleDeleteItem = (id) => {
    props.handleDeleteItem(id);
  };

const handleCheck=(id)=>{
  props.handleCheck(id)
}

return (
  <div>
    {todo.length > 0 ? (
      <main>
        {todo.map((item) => (
          <div key={item.id} className="todo-item-container">
            <div className="checkbox-container">
              <input
                type="checkbox"
                className="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              />
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                  fontFamily: "Open Sans",
                  fontSize: "larger"
                }}
              >
                {item.item}
              </span>
            </div>
            <button
              className="delete-button"
              onClick={() => handleDeleteItem(item.id)}
            >
              <FiTrash2 className="trash-icon" />
            </button>
          </div>
        ))}
      </main>
    ) : (
      <div className="empty-container">
        <p>List is empty</p>
      </div>
    )}
  </div>
);
    }
export default Content;