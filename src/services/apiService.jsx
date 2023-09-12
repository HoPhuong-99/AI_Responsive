import { https } from "./urlConfig";

export const APIService = {
  ListProducts: () => {
    let uri = "/product";
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
