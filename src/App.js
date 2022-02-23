import React,{useState,useEffect} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from "./component/Home";
import Pnf from "./component/Pnf";
import Update from "./component/Update";
import Menu from "./component/Menu";
import Create from "./component/Create";


import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import {Provider} from 'react-redux'
import {createStore}  from 'redux'
import CourseReducer from "./Reducer/courseReducer";
import CourseApi from "./API/CourseApi";


function App() {
const [course,setCourse] = useState([]);

useEffect(() => {
  CourseApi.getAll().then(res => {
    console.log('data ', res);
    setCourse(res.data)
  }).catch(err => toast.error(err.message));
},[]);

  return (
   <Provider store={createStore(CourseReducer,course)}>
      <BrowserRouter>
    <Menu/>
    <ToastContainer position="top-right"/>
    <Routes>
      <Route path={'/'} element={<Home/>}/>
      <Route path={'/home'} element={<Home/>}/>
      <Route path={'/create'} element={<Create/>}/>
      <Route path={'/update/:id'} element={<Update/>}/>
      <Route path={'/*'} element={<Pnf/>}/>
    </Routes>
    </BrowserRouter>
   </Provider>
  );
}

export default App;

