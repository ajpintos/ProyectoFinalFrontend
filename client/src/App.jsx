import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingHome from "./components/LandingHome/LandingHome.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import LoginPage from "./components/LoginPage/LoginPage.jsx";
import Settings from "./components/Settings/Settings.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Store from "./components/Store/Store";
import axios from "axios";
import RegisterPage from "./components/RegisterPage/RegisterPage.jsx";
import MyAccount from "./components/MyAccount/MyAccount.jsx";
import FormUdateMyaccount from "./components/MyAccount/Components/FormUpdate/FormUpdate";
// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "./Redux/actions/actionsUser.js";
//axios.defaults.baseURL = "https://biofresh.shop/backend/"; //para deploy
axios.defaults.baseURL = "http://localhost:3001";

function App() {

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   const userLocalStorage = window.localStorage.getItem('user');
  //   if (userLocalStorage) {
  //     const userLocalStorageRedux = window.JSON.parse(userLocalStorage);
  //     dispatch(setUser(userLocalStorageRedux));
  //   }
  // },[])



  return (
    <div className="App">
      <div className="App-header"></div>
      <Routes>
        <Route path="/" element={<LandingHome />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/store" element={<Store />}></Route>
        <Route path="/store/:id" element={<Store />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/form_update" element={<FormUdateMyaccount />} />
      </Routes>
    </div>
  );
}

export default App;
