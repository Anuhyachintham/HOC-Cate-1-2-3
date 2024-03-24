import Error from './components/Error';
import { lazy,Suspense } from 'react';
import './App.css';
import Header from './components/Header';
// import Home from './components/Home';
import { Outlet, createBrowserRouter } from 'react-router-dom';
// import About from './components/About';
import React from "react";
// import Contact from "./components/Contact";
// import Grocery from "./components/Grocery";
// import  Services from "./components/Services";
import Body from './components/Body';
import Resturantmenu from './components/Resturantmenu';
const Home=lazy(()=>import('./components/Home'))
const About=lazy(()=>import('./components/About'))
const Contact =lazy(()=>import("./components/Contact"))
const Grocery =lazy(()=>import("./components/Grocery"))
const  Services =lazy(()=>import("./components/Services"))
function App() {
  return (<div>
    <Header/>
    <Outlet/>
    
  </div>)
}
export const appRouter= createBrowserRouter([
  {
       path:'/',
       element : <App />,
       children:[
        {

          path:"/",
          element:<Body/>
        },
        {

          path:"/home",
          element:<Suspense fallback={<h1>services are loading....</h1>}><Home/></Suspense>
        },
        {
          path:"/about",
          element:<Suspense><About/></Suspense>
        },
        {
          path:"/contact",
          element:<Suspense><Contact/></Suspense>

        },
        {
        path:"/grocery",
        element:<Suspense><Grocery/></Suspense>
      },
      {
        path:"/services",
        element:<Suspense>< Services/></Suspense>
      },
      {
        path:"/restutants/:id",
        element:<Resturantmenu/>
      }
      ],
      errorElement:<Error/>
}])

export default App;
