import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './pages/Home.jsx';
import OurStory from './pages/OurStory.jsx';
import Membership from './pages/Membership.jsx';
import Articles from './pages/Articles.jsx';
import SingleArticle from './pages/SingleArticle.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
      path:"/",
      element:<Home/>
    },
    {
      path:"/articles",
      element:<Articles/>
    },
    {
      path:"/ourstory",
      element:<OurStory/>
    },
    {
      path:"/membership",
      element:<Membership/>
    },
    ,{

      // get single article
      path:"/articles/:id",
      element:<SingleArticle/>,
      loader:({params}) =>fetch(`https://json-server-pi-peach.vercel.app/blogs/${params.id}`)
    }
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
