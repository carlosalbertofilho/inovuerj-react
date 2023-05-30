import "bulma/css/bulma.min.css";
import "./App.css";
import { Section } from "./components/layout/Section";
import { Columns, Column } from "./components/layout/Columns";
import { useState, useEffect, useMemo } from "react";
import IBGEService from "./services/ibge.service";

const valoresIniciaisDoFormulario = {
  nomeCompleto: "",
  email: "",
  regiao: "",
  estado: "",
  municipio: "",
};

export const App = () => {
  const [formValores, setFormValores] = useState(valoresIniciaisDoFormulario);
  const [regioes, setRegioes] = useState([]);
  const [estadoFiltrado, setEstadoFiltrado] = useState([]);
  const [municipioFiltrado, setMunicipioFiltrado] = useState([]);

  const ibgeService = useMemo(() => new IBGEService(), []);

  useEffect(() => {
    (async () => {
      const data = await ibgeService.regioes();
      setRegioes(data);
    })();
  }, [ibgeService]);

  const enviarFormulario = (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = Object.fromEntries(new FormData(form));
    console.log(formData);
  };
  const limparFormulario = (event) => {
    event.preventDefault();
    setFormValores({ ...valoresIniciaisDoFormulario });
  };
  const escutandoValorDosCampos = (event) => {
    const { name, value } = event.target;
    setFormValores({ ...formValores, [name]: value });
  };
  return (
    <>
      <Section>
        <h1 className="title">Formulário de Incrição</h1>
        <p className="subtitle">Treinamento de React</p>
      </Section>
      <Section>
        <form onSubmit={enviarFormulario}>
          <Columns>
            <Column> nome</Column>
            <Column> email</Column>
          </Columns>
          <Columns>
            <Column> região</Column>
            <Column> estados</Column>
            <Column> município</Column>
          </Columns>
          <Columns>
            <Column>
              <button className="button mr-4 is-primary" type="submit">
                Enviar
              </button>
              <button
                className="button"
                type="reset"
                onClick={limparFormulario}
              >
                Limpar Formulário
              </button>
            </Column>
          </Columns>
        </form>
      </Section>
    </>
  );
};
