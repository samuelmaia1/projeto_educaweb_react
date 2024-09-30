import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from '@chakra-ui/react'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'
import ErrorPage from './routes/ErrorPage.jsx'
import Signup from './routes/Signup.jsx'
import About from './routes/About.jsx'
import Login from './routes/Login.jsx'
import Courses from './routes/Courses.jsx'
import SignupUser from './routes/SignupUser.jsx'
import SignupTeacher from './routes/SignupTeacher.jsx'
import SignupCompany from './routes/SignupCompany.jsx'
import CoursePage from './routes/CoursePage.jsx'
import { NewCourse } from './routes/NewCourse.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: < App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: 'cadastro',
    element: <Signup/>
  },
  {
    path: 'cadastro/aluno',
    element: <SignupUser/>
  },
  {
    path: 'cadastro/professor',
    element: <SignupTeacher/>
  },
  {
    path: 'cadastro/empresa',
    element: <SignupCompany/>
  },
  {
    path: 'sobre',
    element: <About/>
  },
  {
    path: 'entrar',
    element: <Login/>
  },
  {
    path: 'cursos',
    element: <Courses/>
  },
  {
    path: 'cursos/curso',
    element: <CoursePage/>
  },
  {
    path: 'cursos/criar',
    element: <NewCourse/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)

