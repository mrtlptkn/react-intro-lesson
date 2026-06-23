import { StrictMode, lazy } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.tsx';
import Test from './components/Test.tsx';
import Layout from './components/Layout.tsx';



const router = createBrowserRouter([
  {
    Component: Layout, // ana layout bileşeni, tüm sayfalarda ortak olarak kullanılacak yapıyı sağlar
    children: [
      {
        path: "/",
        index: true,
        Component: App,
      },
      {
        path: "/test",
        Component: Test,
      },
      {
        path: "/todos",
        // lazy loading ile component import edilir. Bu sayede sayfa yüklenme süresi kısalır ve bundle boyutu küçülür. Lazy loading ile component import edilirken, component import edilmeden önce bir loading spinner gösterilebilir. Bu sayede kullanıcıya sayfa yükleniyor mesajı verilebilir.
        lazy: () => import("./components/Todos.tsx").then((module) => ({ Component: module.default })),
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
