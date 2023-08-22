
import './App.css';
import Header from './components/Header';
import BookingPage from './components/BookingPage';
import Homepage from './components/Homepage';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </main>
      <Footer />

    </>
  );
}

export default App;
