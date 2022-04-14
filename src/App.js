import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Header */}
        <Header />
        <Routes>
          <Route path="/" element={"aaa"} />
        </Routes>
        <Routes>
          <Route path="/bbb" element={"bbb"} />
        </Routes>
        <h1>Hello World!</h1>
        {/* Tinder Cards */}
        {/* Buttons below tinder cards */}
        {/* Chats screen */}
        {/* Individual chat screen */}
      </BrowserRouter>
    </div>
  );
}

export default App;
