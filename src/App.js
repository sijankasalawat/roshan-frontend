import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Register from "./pages/Register";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Login from "./pages/Login";
import { Dashboard } from "./dashboard/dashboard";
import MainDashboard from "./dashboard/NewDashboard";
import License from "./dashboard/License";
import Bluebook from "./dashboard/Bluebook";
import ViewFine from "./dashboard/ViewFine";



function App() {
  return (
    <Router>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/license" element={<License/>}/>
        <Route path="/bluebook" element={<Bluebook/>}/>
        <Route path="/viewFine" element={<ViewFine/>}/>
        <Route path="/dashboards" element={<MainDashboard/>}/>

      </Routes>
   
    </Router>
  );
}

export default App;