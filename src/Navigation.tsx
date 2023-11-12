import React from 'react';
import Header from './components/Header';
import "/src/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
<<<<<<< Updated upstream
import HomeScreen from './pages/homescreen';
import Business from './pages/business';
=======
import Business from './pages/business';
import HomeScreen from './pages/homescreen';
>>>>>>> Stashed changes

const Navigation = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/business' element={<Business />} />
                
            </Routes>
        </Router>
    );
}

export default Navigation;
