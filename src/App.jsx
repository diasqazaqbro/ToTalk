import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Profile from './componets/Profile/Profile';
import { Routes, Route } from "react-router-dom";
import Dialogs from './componets/Dialogs/Dialogs';
import NavBar from './componets/NavBar/NavBar';

const App = (props) => {

  return (
    <div className="container">
      <div className="main">
        <Header />
        <NavBar />
        <div className="content">
          <Routes>
            <Route path='/profile/' exact element={<Profile store={props.store} />} />
            {/* <Route path='' exact element={<Profile store={props.store} />} /> */}
            <Route exact path='/dialogs' element={<Dialogs store={props.store} />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}


export default App;
