import { DataProvider } from "react-admin";
import { HarenaProviders } from "./types";
import { patrimoineProviders } from "./patrimoine-providers";

export const getProvider = (resource: string): HarenaProviders<any> => {
  switch (resource) {
    case "patrimoines":
      return patrimoineProviders;
    default:
      throw new Error("Unknown resource type");
  }
};

export const dataProvider: DataProvider = {
  create: async (resource, { meta, data: payload }) => {
    return {
      data: await getProvider(resource).saveOrUpdate(payload, {
        ...meta,
        mutationType: "CREATE",
      }),
    };
  },
  update: async (resource, { data: payload, meta }) => {
    return {
      data: await getProvider(resource).saveOrUpdate(payload, {
        ...meta,
        mutationType: "UPDATE",
      }),
    };
  },
  getList: async (
    resource,
    { pagination = { page: 1, perPage: 10 }, sort, filter, meta }
  ) => {
    const response = await getProvider(resource).getList(
      pagination.page,
      pagination.perPage,
      filter,
      sort,
      meta
    );
    return {
      data: response,
      total: response.length,
      pageInfo: {
        hasNextPage: response.length >= pagination.perPage,
        hasPreviousPage: pagination.page > 1,
      },
    };
  },
  getOne: async (resource, { id: payloadId, meta }) => {
    return {
      data: await getProvider(resource).getOne(payloadId as string, meta),
    };
  },
  delete: async (resource, { id: payloadId, meta }) => {
    return {
      data: await getProvider(resource).delete(payloadId as string, meta),
    };
  },
  getMany: () => {
    throw new Error("Not Implemented");
  },
  getManyReference: () => {
    throw new Error("Not Implemented");
  },
  updateMany: () => {
    throw new Error("Not Implemented");
  },
  deleteMany: () => {
    throw new Error("Not Implemented");
  },
};
