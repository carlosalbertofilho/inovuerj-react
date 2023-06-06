import "./App.css";
import MapHolder from "./components/MapHolder";
import MenuINPE from "./components/MenuINPE";
import Wireframe from "./components/Wireframe";
function App() {
  return (
    <Wireframe>
      <MenuINPE onClick={(event) => console.log(event)} />
      <MapHolder />
    </Wireframe>
  );
}

export default App;
