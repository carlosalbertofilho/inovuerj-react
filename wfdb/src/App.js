import { useEffect, useMemo, useState } from "react";
import "./App.css";
import MapHolder from "./components/MapHolder";
import MenuINPE from "./components/MenuINPE";
import Wireframe from "./components/Wireframe";
import INPEService from "./services/inpe.service";
function App() {
  const inpeService = useMemo(() => new INPEService(), []);
  const [url, setUrl] = useState("");
  const [geoJSON, setGeoJSON] = useState(null);

  useEffect(() => {
    (async () => {
      if (url !== "") {
        let data = await inpeService.fetchData(url);
        setGeoJSON(data);
      }
    })();
  }, [url, inpeService]);

  return (
    <Wireframe>
      <MenuINPE onClick={(event) => setUrl(event)} />
      <MapHolder geoJson={geoJSON} />
    </Wireframe>
  );
}

export default App;
