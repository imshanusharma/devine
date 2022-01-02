//import { Landing } from './pages/landing';
import './App.css';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import { Profile } from './components/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/profile/:username" element={<Profile />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
