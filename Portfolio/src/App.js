
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import Contact from './Components/Contact'
import AboutMe from './Components/AboutMe';
import Projects from './Components/Projects'
import Tecnologies from './Components/Tecnologies';
import Experiencie from './Components/Experiencie';



function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/contact' element = {<Contact/>}/>
    <Route path = '/about' element = {<AboutMe/>}/>
    <Route path = '/projects' element = {<Projects/>}/>
    <Route path = '/tecnologies' element = {<Tecnologies/>}/>
    <Route path = '/experiencie' element = {<Experiencie/>}/>
    </Routes>
  </BrowserRouter>
  );
}


export default App;
