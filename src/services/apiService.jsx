import { https } from "./urlConfig";

export const APIService = {
  get_ListData: () => {
    let uri = "/products";
    return https.get(uri);
  },
  ListCategory: () => {
    let uri = "/category";
    return https.get(uri);
  },
  ListService: () => {
    let uri = "/service";
    return https.get(uri);
  },
};
