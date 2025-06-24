import { useContext } from "react";
import "./App.css";
import DashboardRoute from "./routes/DashboardRoute";
import { Context } from "./context/Context";
import AuthRoutes from "./routes/AuthRoute";

function App() {
  const { token } = useContext(Context);
  return token ? <DashboardRoute /> : <AuthRoutes />;
}

export default App;
