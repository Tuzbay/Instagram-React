import './App.css';
// import Login from './components/Login'
import Profile from './components/Profile'
import UserPage from './components/UserPage';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";


function App() {
  return (
    <div className="app">

    <UserPage />
    <Profile />

    </div>
  );
}

export default App;
