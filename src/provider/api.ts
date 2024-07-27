import { PatrimoineApi } from "@harena-com/typescript-client";
import { newConfiguration } from "./utils";

export const patrimoineApi = () => new PatrimoineApi(newConfiguration());
