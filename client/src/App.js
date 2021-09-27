import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Dashboard from './components/Pages/dashboard'
import Login from './components/Pages/login'
import Loader from './components/loader'


function App() {
    return (
   <>
        <Loader />
        <Dashboard />
        <Login />
   </>
    );
}

export default App;