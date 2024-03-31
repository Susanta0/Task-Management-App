import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../Pages/Home'
import { NewTask } from '../Pages/NewTask'
import { EditTask } from '../Pages/EditTask'
import { Task } from '../Pages/Task'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/newtask' element={<NewTask/>}/>
        <Route path='/edittask' element={<EditTask/>}/>
        <Route path='/task' element={<Task/>}/>
    </Routes>
  )
}
