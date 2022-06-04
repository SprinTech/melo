import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LoginApp from './pages/LoginApp';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import UserInfos from './components/UserInfos';

const App = () => {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginApp setIsLogged={setIsLogged} />}/>
                <Route path='/home' element={<Home />}/>
                <Route path='/user' element={<UserInfos />}/>
                <Route path='/*' element={<NotFound />}/>
                {/* <Route path='/' element={}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
