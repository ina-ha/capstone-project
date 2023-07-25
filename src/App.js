
import './App.css';
import Navbar from './components/Navbar';
import BookingPage from './components/BookingPage';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
       <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        </Routes>
      <Footer />

    </div>
  );
}

export default App;
