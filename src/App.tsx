import { Admin, Resource } from "react-admin";
import { dataProvider } from "./provider/data-providers";
import HaLayout from "./layout/HaLayout";
import patrimoines from "./operation/patrimoine";

export const App = () => (
  <Admin dataProvider={dataProvider} layout={HaLayout}>
    <Resource name="patrimoines" {...patrimoines} />
  </Admin>
);
