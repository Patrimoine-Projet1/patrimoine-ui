import { PatrimoineApi, PossessionApi } from "@harena-com/typescript-client";
import { newConfiguration } from "./utils";

export const patrimoineApi = () => new PatrimoineApi(newConfiguration());
export const possessionApi = () => new PossessionApi(newConfiguration());
