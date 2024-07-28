import { EditGuesser, ResourceProps, ShowGuesser } from "react-admin";

export const possessions: Partial<ResourceProps> = {
  show: ShowGuesser,
  edit: EditGuesser,
  recordRepresentation: "nom",
};
