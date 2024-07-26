import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import HaLayout from "./layout/HaLayout";
import "./App.css";
export const App = () => (
  <Admin layout={HaLayout}>
    <Resource
      name="posts"
      list={<p> liste de Patrimoine</p>}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource name="comments" list={<p> liste de Patrimoine</p>} />
  </Admin>
);
