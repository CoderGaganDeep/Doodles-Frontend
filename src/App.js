import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/thunks";
import { Routes, Route } from "react-router-dom";
import { Navigation, MessageBox } from "./components";
import { Login, SignUp } from "./pages";
import { Homepage } from "./pages/Homepage";
import ParentsHomePage from "./pages/ParentsHomePage/index";
import TeacherHomePage from "./pages/TeacherHomePage/index";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
    document.title = "Doodles";
  }, [dispatch]);

  return (
    <div>
      <Navigation />
      <MessageBox />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route path="/parents" element={<ParentsHomePage />} />
        <Route path="/teachers" element={<TeacherHomePage />} />
      </Routes>
    </div>
  );
}

export default App;
