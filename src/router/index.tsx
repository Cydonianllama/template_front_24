import { Routes, Route } from 'react-router-dom'
import { HomePage, LoginPage, NotfoundPage } from '../pages/index'

export const RouterApp = () => {
  return(<>
    <Routes>
      <Route path='login' element={<LoginPage/>} />
      <Route path='/' element={<HomePage/>} />
      <Route path='*' element={<NotfoundPage/>} />
    </Routes>
  </>)
}