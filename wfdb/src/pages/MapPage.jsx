import { useEffect, useMemo, useState } from "react";
import MapHolder from "./../components/MapHolder";
import MenuINPE from "./../components/MenuINPE";
import Wireframe from "./../components/Wireframe";
import INPEService from "./../services/inpe.service";
import useZoom from "../hooks/useZoom";
function MapPage() {
  const inpeService = useMemo(() => new INPEService(), []);
  const [url, setUrl] = useState("");
  const [geoJSON, setGeoJSON] = useState(null);
  const { zoom, zoomIn, zoomOut, setZoom } = useZoom();
  const [center, setCenter] = useState([-14.235004, -51.92528]);

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
      <MenuINPE onClick={(event) => setUrl(event)} activeUrl={url} />
      <MapHolder
        geoJson={geoJSON}
        zoom={zoom}
        center={center}
        onBoundsChanged={({ center, zoom }) => {
          setCenter(center);
          setZoom(zoom);
        }}/>
      <>
        <button
          className="bg-sky-950 text-white py-2 rounded-md w-full text-xs"
          onClick={() => zoomIn()}
        >
          Zoom In
        </button>
        <button
          className="bg-sky-950 text-white py-2 rounded-md w-full text-xs"
          onClick={() => zoomOut()}
        >
          Zoom Out
        </button>
      </>
    </Wireframe>
  );
}

export default MapPage;
