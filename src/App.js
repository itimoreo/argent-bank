import logo from "./logo.svg";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

import "./App.css";
import Home from "./Pages/Home";
import LoginPage from "./Pages/LoginPage";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard/:userId" element={<Dashboard />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
