import { Box } from "@mui/material";
import HaList from "../../components/Halist/HaList";
import { CreateButton, FunctionField, TextField, Toolbar } from "react-admin";
import { Money } from "../../utils/money";
import { HaDateField } from "../../utils/date";

const ActionShow = () => {
  return (
    <Toolbar>
      <CreateButton />
    </Toolbar>
  );
};

export default function patrimoineList() {
  return (
    <Box>
      <HaList
        title="patrimoines"
        resource="patrimoines"
        datagridProps={{
          rowClick: "show",
        }}
        actions={<ActionShow />}
      >
        <TextField source="nom" label="Nom" />
        <FunctionField
          label="Possesseur"
          render={(patrimoine) => {
            return <div>{patrimoine?.possesseur.nom}</div>;
          }}
        />
        <FunctionField
          label="Date"
          render={(patrimoine) => {
            return <HaDateField value={patrimoine?.t} />;
          }}
        />
        <FunctionField
          render={(patrimoine) => Money(patrimoine.valeur_comptable)}
          label="Valeur Comptable"
        />
      </HaList>
    </Box>
  );
}
