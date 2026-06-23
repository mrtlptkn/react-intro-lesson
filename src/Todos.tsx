import axios from "axios";
import { useEffect, useState } from "react";


// API ile Frontend bir interface üzerinden haberleşebiliriz. Bu interface, API'den gelen verilerin tiplerini tanımlar ve TypeScript'in tip güvenliğini sağlar. Örneğin, bir Todo uygulaması için aşağıdaki gibi bir interface tanımlayabiliriz:
// API de bunun record DTO açarız
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});


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


        axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");

  console.log("token", token, 'token');

  if (token) {
    config.headers.set("Authorization", `Bearer ${token}`);
  }
  return config;
});

      axiosInstance.get("https://jsonplaceholder.typicode.com/todos",{timeout: 5000})
        .then((response:any) => {
          console.log("Response status:", response.status);
          console.log("Response data:", response);
          setTodos(response.data);
        })
        .catch((error:any) => console.error("Error fetching todos:", error));

      }, []);


      // Axios interceptors can be used to modify requests or responses before they are handled by then or catch. This can be useful for adding headers, logging, or handling errors globally.

      // Axios auto response json parse yapar. Response data json formatında gelir. Response data json formatında gelmezse, response.data undefined olur. Bu durumda, response.data yerine response.text() kullanabiliriz. Response data json formatında gelmezse, response.json() kullanabiliriz.

  axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("Request config:", config);
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  });



        axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    console.log("Response data:", response);
    return response;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

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