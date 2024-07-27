import { DateInput, Edit, SimpleForm, TextInput } from "react-admin";
import { useParams } from "react-router-dom";

export const PatrimoineEdit = () => {
  const { id } = useParams();

  return (
    <Edit id={id} title="Patrimoine">
      <SimpleForm>
        <TextInput fullWidth source="nom" label="Nom" required />
        <DateInput fullWidth source="t" label="Date T" required />
        <TextInput
          fullWidth
          source="possesseur.nom"
          label="Possesseur"
          required
        />
      </SimpleForm>
    </Edit>
  );
};
