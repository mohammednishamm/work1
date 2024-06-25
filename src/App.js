import logo from "./logo.svg";
import "./App.css";
import a1 from "./cards/Rectangle 20.jpg";
import a2 from "./cards/cropped-WhatsApp-Image-2023-05-20-at-11.37 1.png";
import Loginpage from "./components/login/Loginpage";
import Verific from "./components/veri/Verific";
import Signup from "./components/Signup/Signup";
import Logout from "./components/Logout/Logout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
   <>
   {/* <Loginpage/> */}
   {/* <Verific/> */}
   {/* <Signup/> */}
   {/* <Logout/> */}
   <BrowserRouter>
   <Routes>
    <Route index element={<Loginpage/>}/>
    <Route path="/verific" element={<Verific/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/logout" element={<Logout/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
