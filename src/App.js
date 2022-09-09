import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/cart/Cart';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar';
import Maincomp from './components/home/Maincomp';
import Signin from './components/Signup_signin/Signin';
import SignUp from './components/Signup_signin/SignUp';
import Buynow from './components/buynow/Bynow';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';


function App() {

  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 2000);
  }, [])



  return (
    <>
    {
      data ? (
        <>
          <Navbar />
      <Routes>
        <Route path="/" element={<Maincomp />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/getproductsone/:id" element={<Cart />} />
        <Route path="/buynow" element={<Buynow />} />
      </Routes>
      <Footer />
        </>
      ) :(
        <div className='circle'>
          <CircularProgress />
          <h2>Loading....</h2>
          </div>
      )
    }
      
    </>
  );
}

export default App;
