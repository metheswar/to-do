import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      toast.success(`Congratulations! You added task ${inputValue}!`, {
        position: toast.POSITION.TOP_RIGHT,
        className: "toast-success"
      });
      const newItem = {
        id: todo.length > 0 ? todo[todo.length - 1].id + 1 : 1,
        item: inputValue.trim(),
        checked: false,
      };
      setTodo([...todo, newItem]);
      setInputValue("");
    }
  };

  const handleDeleteItem = (id,item) => {
    toast.error(`You deleted task ${item.item}!`, {
      position: toast.POSITION.TOP_RIGHT,
      className: "toast-error",
    });
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
    localStorage.setItem("todo", JSON.stringify(updatedTodo));
  };

  const handleCheck = (id) => {
    const updatedTodo = todo.map((item) => {
      if (item.id === id) {
        if (!item.checked) {
          toast.success(`Congratulations! You have completed task ${item.item}! `, {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-success"
          });
        } else {
          toast.error(`You have unchecked task ${item.item}!`, {
            position: toast.POSITION.TOP_RIGHT,
            className: "toast-error",
          });
        }
        return { ...item, checked: !item.checked };
      }
      return item;
    });
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
      <Content
        todo={todo}
        handleDeleteItem={handleDeleteItem}
        handleCheck={handleCheck}
      />
      <Footer length={todo.length} />
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        
        draggable
       
        toastClassName="toast-container"
      />
    </div>
  );
}

export default App;
