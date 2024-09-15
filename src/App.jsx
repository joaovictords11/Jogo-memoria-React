import Game from "./components/Game";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <h1>Jogo da memória</h1>
      <Game />
      <ToastContainer pauseOnHover position="top-right" />
    </>
  );
}

export default App;
