import { https } from "./urlConfig";

export const APIService = {
  get_ListData: () => {
    let uri = "/products";
    return https.get(uri);
  },
};
