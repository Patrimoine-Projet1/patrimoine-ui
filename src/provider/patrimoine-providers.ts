import { Patrimoine } from "@harena-com/typescript-client";
import { HarenaProviders } from "./types";
import { patrimoineApi } from "./api";
import { idGenerator } from "./utils";

export const patrimoineProviders: HarenaProviders<Patrimoine> = {
  getOne: async (nom) => {
    return patrimoineApi()
      .getPatrimoineByNom(nom)
      .then((response) => idGenerator(response.data, "nom"));
  },
  getList: async (page, pageSize) => {
    return patrimoineApi()
      .getPatrimoines(page, pageSize)
      .then((response) =>
        response.data.data!.map((patrimoine) => idGenerator(patrimoine, "nom"))
      );
  },
  saveOrUpdate: async (payload) => {
    return patrimoineApi()
      .crupdatePatrimoines({ data: [payload] })
      .then((response) => idGenerator(response.data.data![0], "nom"));
  },
  delete: () => {
    throw new Error("Not Implemented");
  },
};
