import "./App.css";
import LandingPage from "../screens/LandingPage";
import About from "../screens/About";
import RestaurentScreen from "../screens/RestaurentScreen";
import VloggerScreen from "../screens/VloggerScreen";
import { Route, Routes } from "react-router-dom";
import BasicLayout from "../screens/BasicLayout";
import { useDispatch } from "react-redux";
import { UserLoad } from "../redux_Store/actions/UserAction";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(UserLoad());
    }, 1000);
  }, []);

  return (
    <>
      <BasicLayout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Restaurents" element={<RestaurentScreen />} />
          <Route path="/Vloggers" element={<VloggerScreen />} />
          {/* <Route path="/User" element={<UserProfile />} /> */}
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </BasicLayout>
    </>
  );
}

export default App;
