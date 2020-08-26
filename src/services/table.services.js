import axiosClient from './config.services';

class TableService {

  static list(query) {
    // return fetchData(query);
    const url = '/coins/markets';
    return axiosClient.get(url, { params: query });
  }
  static listCurrency() {
    const url = '/simple/supported_vs_currencies';
    return axiosClient.get(url);
  }

}
export default TableService;
