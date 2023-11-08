import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home'
import Footer from './Components/Footer'
import Videos from './Components/Videos'
import Upload from './Components/Upload';
import SignUp from './Components/SignUp';
import Login from './Components/Login'


function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/videos' element={ <Videos/>}></Route>
      <Route path='/upload' element={ <Upload/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
