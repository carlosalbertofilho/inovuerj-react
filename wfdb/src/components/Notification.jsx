import moment from "moment";
import "moment/locale/pt-br";
import { Link } from "react-router-dom";
moment.locale("pt-br");

function Notification({ totalWildefireReported, additionalInfo }) {
    const Dialog = () => {
      const message =
        !totalWildefireReported
          ? "Não foram reportados focos de incêndio nas últimas 48 horas"
          : `Foram encontrados ${totalWildefireReported} focos de incêndio nas últimas 48 horas.`;
      return (
        <div
          className={`p-5 text-white rounded drop-shadow-2xl absolute z-50 w-auto top-4 right-4 ${
            totalWildefireReported === 0 ? "bg-green-700" : "bg-red-700"
          }`}
        >
          {message}
        </div>
      );
    };
    const AdditionalInfoTable = () => {
        if (!additionalInfo) return null;
        const {
          data_hora_gmt,
          estado,
          municipio,
          pais,
          latitude,
          longitude,
        } = additionalInfo;
        return (
          <div
            className={`p-5 rounded drop-shadow-2xl absolute z-50 bottom-10 right-10 bg-white w-1/3`}
          >
            <table className="w-full">
              <tr>
                <th className="w-1/2">País</th>
                <td><Link to={`/country/${pais}`}>{pais}</Link></td>
              </tr>
              <tr>
                <th>Estado</th>
                <td>{estado}</td>
              </tr>
              <tr>
                <th>Município</th>
                <td>{municipio}</td>
              </tr>
              <tr>
                <th>Latitude</th>
                <td>{latitude}</td>
              </tr>
              <tr>
                <th>Longitude</th>
                <td>{longitude}</td>
              </tr>
              <tr>
                <th>Notificado em</th>
                <td>{moment(data_hora_gmt).format("LLLL")}</td>
              </tr>
            </table>
          </div>
        );
      };
      return (
        <>
          <AdditionalInfoTable />
          <Dialog />
        </>
      );
  }

export default Notification;