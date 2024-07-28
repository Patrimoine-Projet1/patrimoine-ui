import {
  Configuration,
  PossessionAvecType,
} from "@harena-com/typescript-client";

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

export const getPossessionTypeValue = (value: PossessionAvecType) => {
  switch (value.type) {
    case "ARGENT":
      return value.argent!;
    case "FLUXARGENT":
      return value.flux_argent!;
    case "MATERIEL":
      return value.materiel!;
    default:
      throw new Error("Unknown PossessionAvecType value");
  }
};
