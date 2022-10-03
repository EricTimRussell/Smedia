import { AppState } from '../AppState'
import { Account } from "../models/Account"
import { logger } from '../utils/Logger'
import { apiSandbox } from './AxiosService'

class AccountService {
  async getAccount() {
    try {
      const res = await apiSandbox.get('/account')
      AppState.account = res.data
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
  async editAccount(formData) {
    const res = await apiSandbox.put('/account', formData)
    AppState.account = new Account(res.data)
  }
}

export const accountService = new AccountService()
