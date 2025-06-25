import { useContext } from "react";
import "./App.css";
import { Context } from "./context/Context";
import AuthRoutes from "./routes/AuthRoute";
import DashboardLayout from "./features";

function App() {
  const { token } = useContext(Context);
  return token ? <DashboardLayout /> : <AuthRoutes />;
}

export default App;
