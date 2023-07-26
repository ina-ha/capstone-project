
import './App.css';
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import Homepage from './components/Homepage';
import About from './components/About';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
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
