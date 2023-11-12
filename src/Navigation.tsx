import React from 'react';
import Header from './components/Header';
import "/src/App.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomeScreen from './pages/homescreen';
import Business from './pages/business';

const Navigation = () => {
    return (
        <Router>
            <Header />
            <Routes>
                {/* <Route path='/' element={<HomeScreen />} */}
                <Route path='/business' element={<Business />} />
            </Routes>
        </Router>
    );
}

export default Navigation;
