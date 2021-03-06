import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Dialogs from './componets/Dialogs/Dialogs';
import NavBar from './componets/NavBar/NavBar';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer';

const App = (props) => {

  return (
    <div className="container">
      <div className="main">
        <HeaderContainer />
        <NavBar />
        <div className="content">
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile' element={<ProfileContainer />} />
            <Route path='/users' exact element={<UsersContainer />} />
            <Route exact path='/dialogs' element={<Dialogs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
