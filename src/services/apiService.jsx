import { https } from "./urlConfig";

export const APIService = {
  get_ListData: () => {
    let uri = "category";
    return https.get(uri);
  },
  
};
