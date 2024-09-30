import './App.css'
import Greeting from "./Greeting.jsx"
import ProfileCard from "./ProfileCard.jsx"
import Status from './Status.jsx'
import Counter from './Counter.jsx'
import FetchApi from './FetchApiComp.jsx'
import NavBar from './NavBar.jsx'
import {Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import ContactUs from './ContactUs.jsx'
import AboutUs from './AboutUs.jsx'

function App() {

  return (
   <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
    <Greeting name="Rammith"/>
    {/* <ProfileCard name="Rammith" age="18" location="Udaipur"/> */}
    <Status state={true}/>
    <Counter/>
    <FetchApi/>
   </>
  )
}

export default App
