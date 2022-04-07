import { useState } from "react";
import "./style.css";

function App() {
  const [input, setİnput] = useState("");
  const [todo, setTodo] = useState([]);

  const inputHandle = (e) => {
    setİnput(e.target.value);
  };
  const todosHandle = () => {
    if (input === "") {
      alert("Nothing");
    } else if (todo.find((todo) => todo.name === input)) {
      alert("zaten eklenmiş");
    } else {
      const listTodos = {
        name: input,
        done:false
      };

      setTodo([...todo, listTodos]);
    }
  };
  const removeFromTodo = (key) => {
    setTodo(todo.filter((todo, keys) => keys !== key));
  };
  const lineThrough=(todoskey)=>{
   setTodo(
     todo.map((todo,key)=>{
       if(key===todoskey){
         todo.done=!todo.done
       }
     })
   )
  }

  return (
    <div className="App">

      <form onSubmit={e=>e.preventDefault()}>

      <input type="text" value={input} onChange={inputHandle} />

<button onClick={todosHandle}>Ekle</button>

<hr />
<ul>
  {todo.map((todos, key) => (
    <li  onClick={()=>lineThrough}  key={key} className={todo.done ? 'done':''}>
      {" "}
      {todos.name}
      <button onClick={() => removeFromTodo(key)}>sil</button>
    </li>
  ))}
</ul>
      </form>
     
    </div>
  );
}

export default App;
