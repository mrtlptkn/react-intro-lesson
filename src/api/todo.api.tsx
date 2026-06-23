
// API ile Frontend bir interface üzerinden haberleşebiliriz. Bu interface, API'den gelen verilerin tiplerini tanımlar ve TypeScript'in tip güvenliğini sağlar. Örneğin, bir Todo uygulaması için aşağıdaki gibi bir interface tanımlayabiliriz:

import axios from "axios";

// API de bunun record DTO açarız
export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" }
});

// todoları getir
export const getTodos = async (): Promise<Todo[]> => {
  try {
    const response = await axiosInstance.get<Todo[]>("/todos");
    return response.data;
    } catch (error) {
        console.error("Error fetching todos:", error);
        return [];
    };
}

// yeni bir todo oluştur
export const createTodo = async (todo: Omit<Todo, "id">): Promise<Todo | null> => {
  try {
    const response = await axiosInstance.post<Todo>("/todos", todo);
    return response.data;
  } catch (error) {
    console.error("Error creating todo:", error);
    return null;
  } 
}


// Interceptors, axios istekleri ve yanıtları üzerinde işlem yapmamıza olanak tanır. Örneğin, her isteğe bir yetkilendirme başlığı eklemek veya yanıtları loglamak için interceptors kullanabiliriz.

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

