import { useEffect, useState } from "react";
import { getTodos, type Todo } from "../api/todo.api";


function Todos() {

  // 1.adım React için veri çek
  // 2.adım useState ile state oluştur
  // 3.adım useEffect ile component mount olduğunda veri çek
  
  const [todos, setTodos] = useState<Todo[]>([]);
  
    useEffect(() => {
        document.title = "Todo List";
        // Api call to fetch todos can be added here
        // Api call işlemleri asenkron olarak yapılabilir ve todo'lar state'e kaydedilebilir
        // 1.yöntem axios olmadan veri çekmek fetch API
        // fetch("https://jsonplaceholder.typicode.com/todos")
        //   .then((response) => 
        //   {
        //     console.log("Response status:", response.status);
        //     console.log("Response data:", response);
        //     return response.json();
        //   })
        //   .then((data) => setTodos(data))
        //   .catch((error) => console.error("Error fetching todos:", error)); 

        // }, []);

     getTodos().then((data) => setTodos(data));

      // Axios interceptors can be used to modify requests or responses before they are handled by then or catch. This can be useful for adding headers, logging, or handling errors globally.

      // Axios auto response json parse yapar. Response data json formatında gelir. Response data json formatında gelmezse, response.data undefined olur. Bu durumda, response.data yerine response.text() kullanabiliriz. Response data json formatında gelmezse, response.json() kullanabiliriz.

    }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div>
      <h1>Todo List</h1>
      <p>Welcome to the todo list page. Here you can find a variety of todos available for completion.</p>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? "Completed" : "Not Completed"}
          </li>
        ))}
      </ul>


    </div>
  );
}


export default Todos;