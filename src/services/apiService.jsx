import { https } from "./urlConfig";

export const APIService = {
  get_ListData: () => {
    let uri = "pokemon/ditto";
    return https.get(uri);
  },
  
};
