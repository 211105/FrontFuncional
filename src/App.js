import { Routes, Route } from "react-router-dom";
import ConfirmUser from "./pages/ConfirmUser.js";
import Dasboard from "./pages/Dashboard.js";
import ForgetPassword from "./pages/ForgetPassword.js";
import Login from "./pages/Login.js";
import RecoveryPassword from "./pages/RecoveryPassword.js";
import Sigin from "./pages/Sigin.js";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/sigin" element={<Sigin/>} />
        <Route path="/forgetpassword" element={<ForgetPassword/>} />
        <Route path="/dashboard" element={<Dasboard/>} />
        <Route path="/recovery_password" element={<RecoveryPassword/>} />
        <Route path="/confirmUser" element={<ConfirmUser/>} />
      </Routes>
    </div>

  );
}

export default App;

