import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";

export const App = () => (
  <Admin>
    <Resource
      name="posts"
      list={<p> liste de Patrimoine</p>}
      edit={EditGuesser}
      show={ShowGuesser}
    />
    <Resource name="comments" list={<p> liste de Patrimoine</p>} />
  </Admin>
);
