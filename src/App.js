import React, { useState, useEffect } from "react";
import Content from "./Content";
import Header from "./Header";
import Input from "./Input";
import Footer from "./Footer";
import "./styles.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    const storedTodo = localStorage.getItem("todo");
    if (storedTodo) {
      setTodo(JSON.parse(storedTodo));
    }
  }, []);

  useEffect(() => {
    if (todo.length > 0) {
      localStorage.setItem("todo", JSON.stringify(todo));
    }
  }, [todo]);

  const handleAddItem = () => {
    if (inputValue.trim() !== "") {
      const newItem = {
        id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 1, // Generate a unique ID based on the last item's ID or start with 1 if the list is empty
        item: inputValue.trim(),
      };
      setTodo([...todo, newItem]);
      setInputValue("");
    }
  };

  const handleDeleteItem = (id) => {
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };
  

  return (
    <div className="App">
      <Header />
      <Input
        inputValue={inputValue}
        setInputValue={setInputValue}
        handleAddItem={handleAddItem}
      />
      <Content todo={todo} handleDeleteItem={handleDeleteItem} />
      <Footer
      length={todo.length}
      />
    </div>
  );
}

export default App;
