import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { paths } from "../../hooks/paths";
const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(paths.singIn);
  }, []);
  return "";
};
export default Home;
