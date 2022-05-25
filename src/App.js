
import './App.css';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Blogs from './components/Blogs/Blogs';
import Tools from './components/Tools.js/Tools';
import SignUp from './components/Login/SignUp';
import RequireAuth from './components/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders';
import MyReview from './components/Dashboard/MyReview';
import Users from './components/Dashboard/Users';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="home" element={<Home></Home>}></Route>
        <Route path="blogs" element={<Blogs></Blogs>}></Route>
        <Route path="tools" element={
        <RequireAuth>
          <Tools></Tools>
        </RequireAuth>
        }></Route>
        <Route path="dashboard" element={
        <RequireAuth>
        <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="myReview" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>

        </Route>
        <Route path="contact" element={<Contact></Contact>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
