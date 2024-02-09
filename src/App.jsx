import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './Componants/Layout/Layout';
import About from './Componants/About/About';
import Navbar from './Componants/Navbar/Navbar';
import Footer from './Componants/Footer/Footer';
import Home from './Componants/Home/Home';
import Contact from './Componants/Contact/Contact';
import Portfolio from './Componants/Portfolio/Portfolio';
import Notfound from './Componants/Notfound/Notfound';

let routers = createBrowserRouter([
  {path:'' , element:<Layout/>,children:[
    {index:true , element:<Home/>},
    {path:'footer' , element:<Footer/>},
    {path:'about' , element:<About/>},
    {path:'navbar' , element:<Navbar/>},
    {path:'contact' , element:<Contact/>},
    {path:'portfolio' , element:<Portfolio/>},
    {path:'*' , element:<Notfound/>},
  ]}
])

function App() {
  return <>
      <RouterProvider router={routers}></RouterProvider>
  </>;
}

export default App;
