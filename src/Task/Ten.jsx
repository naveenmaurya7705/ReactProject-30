import React from 'react'
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';

 import Products from '../Route/Products';
 import Contacts from '../Route/Contacts';
 import Blog from '../Route/Blog';
 import Services from '../Route/Services';
import Homo from '../Route/Homo';
import More from '../Route/More';
const Ten = () => {
  return (
    <div>
      <BrowserRouter>
     <nav>
      <ul style={{  display:'flex', justifyContent:'space-around'}}>
        <li>
        <Link to='/'>Home</Link>
        </li>
        <li>
        <Link to='/services'>Services</Link>
        </li>
        <li>
        <Link to='/blog'>Blog</Link>
        </li>
        <li>
        <Link to='/products'>Products</Link>
        </li>
        <li>
        <Link to='/contacts'>Contacts</Link>
        </li>
        <li>
        <Link to='/more'>more</Link>
        </li>
      </ul>
     </nav>
    <Routes >
        <Route path='/'  element={<Homo />}></Route>
        <Route path='/services'  element={<Services/>}>Services</Route>
        <Route path='/blog'  element={<Blog/>}>Blog</Route>
        <Route path='/products'  element={<Products />}>Products</Route>
        <Route path='/contacts'  element={<Contacts/>}>Contacts</Route>
        <Route path='/more'  element={<More />}>More</Route>
    </Routes>
      </BrowserRouter>
    
    </div>
  )
}

export default Ten