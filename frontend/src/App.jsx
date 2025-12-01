import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favorite from './pages/Favorite'
import {Toaster} from 'react-hot-toast';
import Footer from './components/Footer'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
  return (
    <>
    <Toaster/>
    {!isAdminRoute && <Navbar/>}
    <Routes>
      <Route Path={"/"} element={<Home/>}/>
      <Route Path={"/movies"} element={<Movies/>}/>
      <Route Path={"/movies/:id"} element={<MovieDetails/>}/>
      <Route Path={"/movies/:id/:date"} element={<SeatLayout/>}/>
      <Route Path={"/my-bookings"} element={<MyBookings/>}/>
      <Route Path={"favorite"} element={<Favorite/>}/>
    </Routes>
    {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App