import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home.jsx'
import Admin from './components/Admin.jsx'
import GetAllQuiz from './components/quiz/GetAllQuiz.jsx'
import AddQuestion from './components/question/AddQuestion.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/admin',
    element:<Admin/>
  },
  {
    path:'/all-quizzes',
    element:<GetAllQuiz/>
  },
  {
    path:'/create-quiz',
    element:<AddQuestion/>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
   
  </React.StrictMode>,
)
