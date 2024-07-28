import { Possession, PossessionAvecType } from "@harena-com/typescript-client";
import { getPossessionTypeValue, idGenerator } from "./utils";
import { HarenaProviders } from "./types";
import { possessionApi } from "./api";

export const idPossessionsGen = (possession: PossessionAvecType) => {
  return idGenerator(getPossessionTypeValue(possession), "nom");
};

export const possessionProvider: HarenaProviders<Possession> = {
  getOne: async (possessionNom, { patrimoineNom }) => {
    return possessionApi()
      .getPatrimoinePossessionByNom(possessionNom, patrimoineNom)
      .then((response) => idPossessionsGen(response.data));
  },
  getList: async (page, pageSize, _filter, _sort, { patrimoineNom }) => {
    return possessionApi()
      .getPatrimoinePossessions(patrimoineNom, page, pageSize)
      .then((response) =>
        response.data.data!.map((possession) => idPossessionsGen(possession))
      );
  },
  saveOrUpdate: async (payload, { patrimoineNom }) => {
    return possessionApi()
      .crupdatePatrimoinePossessions(patrimoineNom, 0, 0, {
        data: [payload as any],
      })
      .then((response) => idPossessionsGen(response.data.data![0]));
  },
  delete: () => {
    throw new Error("Not Implemented");
  },
};
