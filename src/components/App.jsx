import React from "react";
import Home from "../router/Home";
import Modal from "../router/Modal";
import Writing from "../router/Writing";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PostDetail from "../router/PostDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modal" element={<Modal />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
