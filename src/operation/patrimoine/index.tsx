import { PatrimoineCreate } from "./patrimoineCreate";
import { PatrimoineEdit } from "./patrimoineEdit";
import patrimoineList from "./patrimoineList";
import patrimoineShow from "./patrimoineShow";

const patrimoines = {
  list: patrimoineList,
  show: patrimoineShow,
  edit: PatrimoineEdit,
  create: PatrimoineCreate,
};
export default patrimoines;
