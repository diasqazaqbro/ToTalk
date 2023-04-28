import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBar from "./componets/NavBar/NavBar";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";
import HeaderContainer from "./componets/Header/HeaderContainer";
import Login from "./componets/Login/Login";
import DialogsContainer from "./componets/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className="container">
      <div className="main">
        <HeaderContainer />
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
