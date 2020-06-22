import axios from "axios";

export const fetchData = function () {
  return axios({
    method: "get",
    url:
      "https://cdn.rawgit.com/prampcontent/180077452f9279073cab1035f60d30cf/raw/9cbf891a80bad9ad09c6261ef9578a65502922cc/search_helper.js",
  });
};
