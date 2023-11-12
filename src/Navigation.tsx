import React from 'react';
import Header from './components/Header';
import "/src/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Business from './pages/business';
import HomeScreen from './pages/homescreen';
import Entertainment from './pages/entertainment';
import Technology from './pages/technology';
import Science from './pages/science';

const Navigation = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<HomeScreen />} />
                <Route path='/business' element={<Business />} />
                <Route path='/entertainment' element={<Entertainment />} />
                <Route path='/technology' element={<Technology />} />
                <Route path='/science' element={<Science />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
