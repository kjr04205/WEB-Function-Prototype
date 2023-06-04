import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div>
      <h1>React Router DOM 테스트</h1>
      <Home></Home>
      <Topics></Topics>
      <Contact></Contact>
    </div>
  );
}
function Home(){
  return (
    <div>
      <h2>Home</h2>
      <p>Home......</p>
    </div>
  )
}
function Topics(){
  return (
    <div>
      <h2>Topics</h2>
      <p>Topics......</p>
    </div>
  )
}
function Contact(){
  return (
    <div>
      <h2>Contact</h2>
      <p>Contact......</p>
    </div>
  )
}
function Contact2(){
  return (
    <div>
      <h2>Contact2</h2>
      <p>Contact2......</p>
    </div>
  )
}

export default App;
