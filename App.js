import Home from './components/Home';
import Search from './components/Search';
import About from './components/About';
import Ques from './components/Ques';
import Donate from './components/Donate';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
        <Route path="/About" element={<About/>} />
        </Routes>
        <Routes>
        <Route path="/Ques" element={<Ques/>}/>
        </Routes>
        <Routes>
          <Route path="/Donate" element={<Donate/>}/>
        </Routes>
        <Routes>
          <Route path="/Search" element={<Search/>}/>
        </Routes>
        </BrowserRouter>
        </>
  );
}

export default App;
