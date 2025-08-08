import { useState,useEffect, use } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Footer from './Component/Footer'
import { Outlet } from 'react-router'
import { Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import Header from './Component/Header'
 

function App() {
  const [Loading, setLoading] = useState();
  const theme = useSelector((state) => state.theme.currentGradient);
  const currentIndex = useSelector((state) => state.theme.currentIndex);
  const currentGradient = useSelector((state) => state.theme.currentGradient);

  // useEffect(() => {
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); 
  //   // return () => clearTimeout(timer); // Cleanup the timer on component unmount
  // }, []);

    useEffect(() => {
      console.log('Saving to localStorage:', { currentIndex, currentGradient });
    localStorage.setItem('theme-gradient', JSON.stringify({
      currentIndex,
      currentGradient
    }));
  }, [currentIndex, currentGradient]);

  return (
    <>
    <div id="Home" style={{background:theme}}>
      {Loading ? (
        <div className=" text-center d-flex align-items-center justify-content-center" style={{height:"100vh", width:"100%"}}>
           <Spinner animation="border" variant="primary" style={{ width: '4rem', height: '4rem',borderWidth: '6px' }}/>
        </div>
      ) : <>
      <Outlet />
        <Footer />
      </>}
    </div>
    </>
  )
}

export default App
