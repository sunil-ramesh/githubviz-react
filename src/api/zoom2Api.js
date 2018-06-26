import { ROOT_URL, headers } from "./api_config";
import axios from 'axios';

export const singleRepoNCommits = (params) => {
  return axios({
    method: 'get',
    url: `${ROOT_URL}/singleRepoNCommits/${params}`,
    headers: headers()
  })
}