import "bulma/css/bulma.min.css";
import "./App.css";
import { Section } from "./components/layout/Section";
import { Columns, Column } from "./components/layout/Columns";
import { useState, useEffect, useMemo } from "react";
import IBGEService from "./services/ibge.service";
import config from "./appConfigFormValidation";
import { validationFormFields } from "./utils/validationFormFields";
import { Input } from "./components/form/Input";
import { Select } from "./components/form/Select";

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

  useEffect(() => {
    (async () => {
      setEstadoFiltrado(
        await ibgeService.estadosPorRegioes(formValores.regiao)
      );
      setMunicipioFiltrado([]);
    })();
  }, [formValores.regiao, ibgeService]);
  useEffect(() => {
    (async () => {
      setMunicipioFiltrado(
        await ibgeService.municipiosPorEstados(formValores.estado)
      );
    })();
  }, [formValores.estado, ibgeService]);
  useEffect(
    () => setvalidacaoForm(validationFormFields(config, formValores)),
    [formValores]
  );

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
  const [validacaoForm, setvalidacaoForm] = useState(
    validationFormFields(config, formValores)
  );
  return (
    <>
      <Section>
        <h1 className="title">Formulário de Incrição</h1>
        <p className="subtitle">Treinamento de React</p>
      </Section>
      <Section>
        <form onSubmit={enviarFormulario}>
          <Columns>
            <Column>
              <Input
                name="nomeCompleto"
                label="Nome Completo"
                placeholder="Nome Completo"
                onChange={escutandoValorDosCampos}
                value={formValores.nomeCompleto}
                validation={validacaoForm}
              />
            </Column>
            <Column>
              <Input
                name="email"
                label="E-mail"
                placeholder="Informe seu melhor e-mail"
                onChange={escutandoValorDosCampos}
                value={formValores.email}
                validation={validacaoForm}
              />
            </Column>
          </Columns>
          <Columns>
            <Column>
              <Select
                name="regiao"
                label="Escolha uma região"
                onChange={escutandoValorDosCampos}
                value={formValores.regiao}
                validation={validacaoForm}
                options={regioes}
                optionMap={{
                  value: "id",
                  label: "nome",
                }}
              />
            </Column>
            <Column>
              <Select
                name="estado"
                label="Escolha um estado"
                onChange={escutandoValorDosCampos}
                value={formValores.estado}
                validation={validacaoForm}
                options={estadoFiltrado}
                optionMap={{
                  value: "id",
                  label: "nome",
                }}
                disabled={estadoFiltrado.length === 0}
              />
            </Column>
            <Column>
              <Select
                name="municipio"
                label="Escolha um município"
                onChange={escutandoValorDosCampos}
                value={formValores.municipio}
                validation={validacaoForm}
                options={municipioFiltrado}
                optionMap={{
                  value: "id",
                  label: "nome",
                }}
                disabled={municipioFiltrado.length === 0}
              />
            </Column>
          </Columns>
          <Columns>
            <Column>
              <button
                className="button mr-4 is-primary"
                type="submit"
                disabled={validacaoForm.submitDisabled} // incluir
              >
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
