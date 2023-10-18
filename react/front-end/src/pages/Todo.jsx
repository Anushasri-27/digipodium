/* eslint-disable react/jsx-key */
import { useState } from "react";
import "../styles/todo.css";

/* eslint-disable no-undef */
const Todo = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (e) => {
  
    if (e.code === "Enter") {
      if(e.target.value === ""){
        alert("enter task before submiting");
        return;
       }else{

         console.log(e.target.value);
         setTodoList([...todoList, e.target.value]);
         e.target.value = "";
       }
    }
  };

  const handleClick = (e) => {
    if (e.target.classList.contains("btn-danger")) {
      e.target.classList.remove("fa-square");
      e.target.classList.remove("btn-danger");
      e.target.classList.add("fa-square-check");
      e.target.classList.add("btn-success");
    
    } else {
      e.target.classList.add("fa-square");
      e.target.classList.add("btn-danger");
     
    }
  };

  const removeTodo =(index) =>{
    console.log(index);
    const temp = todoList;
    temp.splice(index ,1);
    setTodoList(...temp);
  }


  return (
    <div className="containerlist">
      <div className="container vh-100  py-5">
        <h1 className="text-center">Todo List</h1>
        <div className="card  mt-5">
          <div className="card-header">
            <input
              type="text"
              className="form-control list-input"
              placeholder="add a task"
              onKeyDown={addNewTodo}
              required="true"
            />
          </div>
          <div className="card-body todo-list">
            {todoList.map((todoList) => {
              return (
                <div  id="l-wrap" className=" d-flex justify-content-between mt-3 ">
                  <p className="list mx-1 "> {todoList} </p>

                  <button
                    className="btn btn-danger btn-tick fa-regular fa-square px-3"
                    onClick={()=> {handleClick() }}
                  ></button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
