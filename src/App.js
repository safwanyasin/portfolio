import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './components/Layout';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import AboutMe from './pages/AboutMe';
import firebase from "firebase/compat/app";
import 'firebase/firestore';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyCj3NLcyit5uh6clopKWkCGywxXKZQDDRQ",
    authDomain: "safwan-portfolio-39b34.firebaseapp.com",
    projectId: "safwan-portfolio-39b34",
    storageBucket: "safwan-portfolio-39b34.appspot.com",
    messagingSenderId: "758990247524",
    appId: "1:758990247524:web:5ab1c5e790fcd8ec78f171"
  };
  
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);
  console.log("Hey Devleopers!")
  useEffect(() => {
    Aos.init({
      once: true,
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {/* <Route path="about" element={<AboutMe />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
