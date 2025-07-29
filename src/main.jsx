import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './components/Home/Home';
import Dashboad from './components/Dashboad/Dashboad';
import BookDetail from './components/BookDetail/BookDetail';
import Listedbooks from './components/ListedBooks/Listedbooks';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "books/:bookId",
        element: <BookDetail/>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: 'listedBooks',
        element: <Listedbooks/>,
        loader: () => fetch('/booksData.json')
      },
      {
        path: "dashboad",
        element:<Dashboad/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
