import { Configuration } from "@harena-com/typescript-client";

export const idGenerator = <T>(payload: T, key: keyof T) => ({
  ...payload,
  id: payload[key],
});

export const baseUrl = process.env.API_URL || "";

export const newConfiguration = () => {
  const newConfig = new Configuration();
  newConfig.basePath = baseUrl;
  return newConfig;
};
