import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  EditButton,
  FunctionField,
  Show,
  SimpleShowLayout,
  TextField,
  Toolbar,
} from "react-admin";

import { Money } from "../../utils/money";
import { HaDateField } from "../../utils/date";

const ActionShow = () => {
  return (
    <Toolbar>
      <EditButton />
    </Toolbar>
  );
};

export default function PatrimoineShow() {
  const { id } = useParams();
  return (
    <Box>
      <Show id={id} actions={<ActionShow />}>
        <SimpleShowLayout>
          <TextField source="nom" label="nom" />
          <FunctionField
            label="Date"
            render={(patrimoine) => {
              return <HaDateField value={patrimoine?.t} />;
            }}
          />
          <TextField source="possesseur.nom" label="possesseur.nom" />
          <FunctionField
            render={(patrimoine) => Money(patrimoine.valeur_comptable)}
            label="Valeur Comptable"
          />
        </SimpleShowLayout>
      </Show>
    </Box>
  );
}
