import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoList';

// let name:string;
// let age:number | string; // union | both of types number and string
// let isStudent : boolean;
// let hobbies : string[];
// let role: [number, string]; //tuple

// // function printName(name:string){
// //   console.log(name);

// // }
// let printName : (name:string) => any;
// let personName : unknown; //any yerine bunu kullan
//it is not suggested way
// let person : Object;
// type Person = {
//   name: string;
//   age: number;
//   hi?: string 
// }
// let person:Person = {
//   name: "pir",
//   age: 35
// }
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
 

  const handleAdd = (e:React.FormEvent<EventTarget>) => {
    e.preventDefault();
    if(todo){
      setTodos([...todos, {id:Date.now(),todo: todo,isDone:false}])
      setTodo("")
    }
    
  }
  console.log(todos);
  return (
    <div className="App">
      <span className="heading">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.length>0&&<TodoList todos={todos} setTodos={setTodos}/>}
    </div>
  );
}

export default App;
