import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Body from './components/Body';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';
import SkillsExpertise from './components/SkillsExpertise';
import WorkExperience from './components/WorkExperience';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Body/>
        },
        {
          path: "/skills",
          element: <SkillsExpertise/>
        },
        {
          path: "/resume",
          element: <Resume/>
        },
        {
          path: "/contact",
          element: <Contact/>
        },
        {
          path: "/workexperience",
          element: <WorkExperience/>
        }
      ]
    },
  ]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
