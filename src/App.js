import React from "react";
import "./App.css";
import Header from "./componets/Header/Header";
import { Routes, Route } from "react-router-dom";
import Dialogs from "./componets/Dialogs/Dialogs";
import NavBar from "./componets/NavBar/NavBar";
import UsersContainer from "./componets/Users/UsersContainer";
import ProfileContainer from "./componets/Profile/ProfileContainer";

const App = () => {
  return (
    <div className="container">
      <div className="main">
        <Header />
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/profile/:userId" element={<ProfileContainer />} />
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<Dialogs />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
