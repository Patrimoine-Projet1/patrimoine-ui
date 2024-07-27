import { Box } from "@mui/material";
import HaList from "../../components/Halist/HaList";
import { EditButton, FunctionField, TextField, Toolbar } from "react-admin";
import { Money } from "../../utils/money";
import { HaDateField } from "../../utils/date";

export const ActionShow = () => {
  return (
    <Toolbar>
      <EditButton />
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
