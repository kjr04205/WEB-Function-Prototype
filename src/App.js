import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <h1>React Router DOM 테스트</h1>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/topics">topics</a></li>
        <li><a href="/contact">contact</a></li>
      </ul>
      <Router>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/topics" element={<Topics></Topics>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </Router>
    </div>

  );
}
function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Home......</p>
    </div>
  )
}
function Topics() {
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics......</p>
    </div>
  )
}
function Contact() {
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact......</p>
    </div>
  )
}

export default App;
