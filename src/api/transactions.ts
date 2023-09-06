import BaseService from "./base";

class TransactionsService extends BaseService {
  constructor() {
    super("/transactions");
  }
}

export default new TransactionsService();
