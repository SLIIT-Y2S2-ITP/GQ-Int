import React from 'react';
import NavBar from './components/NavBar';
import FooterPage from './components/Footer';
import SlideShow from './components/SlideShow'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

//import'bootstrap-css-only/css/bootstrap.min.css'; 
//import'mdbreact/dist/css/mdb.css';






function App() {
  return (
   <>
    <Router>
         <NavBar/>
         <SlideShow/>
         <FooterPage/>
      
       
    
    <Switch>
      <Route path='/' exact />
    </Switch>
     
    </Router>
   </>
  );
}

export default App;
