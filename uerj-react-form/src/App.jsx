import "bulma/css/bulma.min.css";
import "./App.css";
import { Section } from "./components/layout/Section";
import { Columns, Column } from "./components/layout/Columns";

export const App = () => {
  return (
    <>
      <Section>
        <h1 className="title">Formulário de Incrição</h1>
        <p className="subtitle">Treinamento de React</p>
      </Section>
      <Section>
        <form>
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
            <Column> botões</Column>
          </Columns>
        </form>
      </Section>
    </>
  );
};
