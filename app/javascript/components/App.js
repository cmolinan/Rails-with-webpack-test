import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GreetingMessage from "./GreetingMessage";
import store from "../redux/store";

function App() {
  return (
  <Provider store={store}>
    <Router>
        <Routes>
            <Route path="/" element={<GreetingMessage />} />
        </Routes>
    </Router>
  </Provider>
  );
}

export default App;
