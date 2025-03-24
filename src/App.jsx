import { Outlet } from "react-router-dom";
import { Navbar } from "./comapanents/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
