import { Create, DateInput, SimpleForm, TextInput } from "react-admin";
import { useParams } from "react-router-dom";

export const PatrimoineCreate = () => {
  const { id } = useParams();

  return (
    <Create id={id}>
      <SimpleForm>
        <TextInput
          data-testid="nom-input"
          fullWidth
          source="nom"
          label="Nom"
          required
        />
        <DateInput
          data-testid="t-input"
          fullWidth
          source="t"
          label="Date T"
          required
        />
        <TextInput
          fullWidth
          data-testid="possesseur-input"
          source="possesseur.nom"
          label="Possesseur"
          required
        />
      </SimpleForm>
    </Create>
  );
};
